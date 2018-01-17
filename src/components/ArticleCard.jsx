import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ActionBar from './ActionBar';

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
      <ActionBar/>  
    </Card.Content>
  </Card>
)

export default ArticleCard