import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ActionBar from './ActionBar';

const ArticleCard = (props) => (
  <Card>
    <Image style={{ height: 250, objectFit: 'cover' }} src={props.Image} />
    <Card.Content>
      <Card.Header>
        {props.Title}
      </Card.Header>
      <Card.Description>
        {props.Description.substring(0,255)}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <ActionBar id={props.id} isBookmarked={props.isBookmarked} isLiked={props.isLiked}/>
    </Card.Content>
  </Card>
)

export default ArticleCard