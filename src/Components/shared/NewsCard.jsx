import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import Logo from '../../Resources/Images/internopay_logo.png';
import { format } from 'timeago.js';

export default function NewsCard({
  author,
  content,
  description,
  publishedAt,
  urlToImage,
  url,
  title,
  width = '100',
  height = '300',
  direction = 'column'
}) {
  return (
    <Card className={`w-100 w-sm-${width} d-flex flex-${direction} border-1 rounded-3 p-0`} style={{ height: `${height}px`, overflow: 'hidden' }}>
     <div
  style={{
    backgroundImage: `url(${urlToImage || Logo})`,
    height: direction === 'column' ? '50%' : '100%',
    backgroundSize: 'contain', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat' 
  }}

/>

      {/* <Card.Img src={urlToImage || Logo} alt={title} className={`${direction === 'column' ? 'h-50' : 'h-100'} img-fluid `} style={{objectFit:''}} /> */}
      <Card.Body className="d-flex flex-column p-2">
        <Card.Title as="h4" className="text-truncate">{title}</Card.Title>
        <Card.Text className="text-truncate">{description}</Card.Text>
        <Card.Footer className="mt-auto d-flex flex-column flex-sm-row justify-content-between align-items-center p-2">
          <small className="text-muted">{format(publishedAt)}</small>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Read more</a>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
