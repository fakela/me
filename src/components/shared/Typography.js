import React from 'react'

import Text from './Text'

export const Heading = props => (
  <Text
    color={props.inverted ? 'white' : 'darkBlue'}
    size="huge"
    weight="bold"
    style={{ marginBottom: 25 }}
    {...props}
  >
    {props.children}
  </Text>
)

export const Paragraph = props => (
  <div style={{ marginBottom: 15 }}>
    <Text
      color={props.inverted ? 'white' : 'black'}
      size="large"
      weight="normal"
      lineHeight={1.75}
      {...props}
    >
      {props.children}
    </Text>
  </div>
)