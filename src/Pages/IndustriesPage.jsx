import React from 'react';
import { useGetNewsQuery } from '../api/authNews';
import { Col, Row, Stack, Spinner, Alert } from 'react-bootstrap';
import NewsCard from '../Components/shared/NewsCard';

export default function Industries() {
  const { isFetching: isFetchingGetNews, isLoading: isLoadingGetNews, data: GetNewsData, error: GetNewsError, isError: isGetNewsError } = useGetNewsQuery({
    category: 'business'
  });

  if (isLoadingGetNews || isFetchingGetNews) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (isGetNewsError) {
    return (
      <Alert variant="danger">
        <Alert.Heading>Error</Alert.Heading>
        <p>{GetNewsError.message}</p>
      </Alert>
    );
  }

  return (
    <section>
      <h1 className='text-capitalize py-3'>Industries</h1>
      <Stack gap={3}>
      
          {GetNewsData?.articles && GetNewsData.articles.length > 0 && (
          
              <NewsCard
                urlToImage={GetNewsData.articles[0].urlToImage}
                title={GetNewsData.articles[0].title}
                description={GetNewsData.articles[0].description}
                publishedAt={GetNewsData.articles[0].publishedAt}
                url={GetNewsData.articles[0].url}
                direction='row'
              />
          
          )}
       
        <Row>
          {GetNewsData?.articles?.map((article, index) => ( 
            <Col sm={12} md={3} className="mb-4">
              <NewsCard
                urlToImage={article.urlToImage}
                title={article.title}
                description={article.description}
                publishedAt={article.publishedAt}
              />
            </Col>
          ))}
          <Col sm={12} md={9}>
            <Row>
            {GetNewsData?.articles?.map((article, index) => ( 
              <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                <NewsCard
                  urlToImage={article.urlToImage}
                  title={article.title}
                  description={article.description}
                  publishedAt={article.publishedAt}
                />
              </Col>
            ))}
            </Row>
          </Col>
      
        </Row>
      </Stack>
    </section>
  );
}
