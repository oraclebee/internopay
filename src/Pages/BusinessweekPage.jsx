import React from 'react';
import { useGetNewsQuery } from '../api/authNews';
import { Col, Row, Stack, Spinner, Alert } from 'react-bootstrap';
import NewsCard from '../Components/shared/NewsCard';
import Data from './../constant/data.json'

export default function BusinessweekPage() {
  const { isFetching: isFetchingGetNews, isLoading: isLoadingGetNews, data: GetNewsData, error: GetNewsError, isError: isGetNewsError } = useGetNewsQuery({
    category: 'sports'
  });

  // if (isLoadingGetNews || isFetchingGetNews) {
  //   return (
  //     <div className="d-flex justify-content-center align-items-center min-vh-100">
  //       <Spinner animation="border" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </Spinner>
  //     </div>
  //   );
  // }

  // if (isGetNewsError) {
  //   return (
     
  //       <p>{GetNewsError.message}</p>
     
  //   );
  // }

  return (
    <section>
      <h1 className='text-capitalize py-3'>Business WeekPage</h1>
      <Stack gap={3}>
      
          {Data?.articles && Data.articles.length > 0 && (
          
              <NewsCard
                urlToImage={Data.articles[0].urlToImage}
                title={Data.articles[0].title}
                description={Data.articles[0].description}
                publishedAt={Data.articles[0].publishedAt}
                url={Data.articles[0].url}
                direction='row'
              />
          
          )}
       
        <Row>
          {Data?.articles?.map((article, index) => ( 
            <Col sm={12} md={3} className="mb-4">
              <NewsCard
                urlToImage={article.urlToImage}
                title={article.title}
                description={article.description}
                publishedAt={article.publishedAt}
                url={article.url}
              />
            </Col>
          ))}
          <Col sm={12} md={9}>
            <Row>
            {Data?.articles?.map((article, index) => ( 
              <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                <NewsCard
                  urlToImage={article.urlToImage}
                  title={article.title}
                  description={article.description}
                  publishedAt={article.publishedAt}
                  url={article.url}
                />
              </Col>
            ))}
            </Row>
          </Col>
      
        </Row>
      </Stack>
    </section>
  )
}
