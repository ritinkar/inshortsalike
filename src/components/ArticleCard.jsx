import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ArticleCard = () => (
  <Card>
    <Image src='https://i.imgur.com/Or1Oe6B.jpg' />
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default ArticleCard