import Head from "next/head";
import Page from "../components/Page";
import { Container, InputGroup } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { BallTriangle } from "react-loading-icons";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

export default function Blog() {
  const defaultPage = "http://localhost:8000/api/v1/posts/";
  const fetchPosts = ({ pageParam }) => {
    let ext = null;
    if (pageParam) {
      let ext = pageParam;
    }
    return axios.get(defaultPage);
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("posts", fetchPosts, {
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage, pages);
      return lastPage.nextCursor;
    },
  });

  return (
    <Page>
      <Head>
        <title>James V Spadafora - Blog</title>
      </Head>
      <Container className={styles.description}>
        Blog
        <BallTriangle />
      </Container>
    </Page>
  );
}
