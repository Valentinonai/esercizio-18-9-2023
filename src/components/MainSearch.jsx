import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch, mainSearch, prevQuery } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobs = useSelector((state) => state.jobs.content);
  const dispatch = useDispatch();
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  const search = useSelector((state) => state.search.value);
  const prev = useSelector((state) => state.search.query);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const url = baseEndpoint + query + "&limit=20";
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(changeSearch(true));
    dispatch(prevQuery(query));
    dispatch(mainSearch(url));
  };

  useEffect(() => {
    if (search) {
      dispatch(mainSearch(baseEndpoint + prev + "&limit=20"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              defaultValue={search ? prev : query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={2}>
          <Link to={"/Favourites"}>
            <Button variant="primary">Favourites</Button>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
