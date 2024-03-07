import request, { gql } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        prize
        publishedAt
        updatedAt
      }
    }
  `;

  const result = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clth65da4005x07w1kprvsm8z/master', query);
  return result;
};
