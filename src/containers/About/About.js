import React from 'react'
import Form from 'react-jsonschema-form'

import { Msg } from './messages'

const schema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: { type: 'string', title: 'Your name', default: '' },
    feedback: { type: 'string', title: 'Feedback', default: '' }
  }
}
const uiSchema = {
  feedback: { 'ui:widget': 'textarea' }
}

export default class About extends React.Component {

  onSubmit = (ev) => {
    alert(`Hi ${ev.formData.name}, this is just an example.\nData will not be submitted.\nIf you want to contact me, please file a Github issue.`)
  }

  render () {
    return (
      <section>
        <h3><Msg s="title"/></h3>

        <p><Msg s="intro"/></p>

        <div>
          <Form schema={schema} uiSchema={uiSchema}
                autoFocus={true} showErrorList={false}
                onSubmit={this.onSubmit}>
          </Form>
        </div>
      </section>
    )
  }
}
