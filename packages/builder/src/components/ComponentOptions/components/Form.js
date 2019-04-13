import React from 'react'
import PropTypes from 'prop-types'
import { LocalForm } from 'react-redux-form'
import { pick } from 'lodash'

import { updateComponent } from '../../../actions/components'

const Form = ({
  id, data, keys, validators,
  getDispatch, postProcess=d => d,
  children, className, style
}, { store }) =>
  <LocalForm
    initialState={ pick(data, keys) }
    onChange={ newData => store.dispatch(updateComponent(id, postProcess(newData))) }
    getDispatch={ getDispatch }
    className={ className }
    style={ style }
    validators={ validators }
  >
    { children }
  </LocalForm>

Form.contextTypes = {
  store: PropTypes.object
}

export default Form
