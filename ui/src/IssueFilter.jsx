/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import URLSearchParams from 'url-search-params';
import { withRouter } from 'react-router-dom';
// Bootstrap
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// The form import should take care of all of the
// need form imports
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default withRouter(
  class IssueFilter extends React.Component {
    constructor({ location: { search } }) {
      super();
      const params = new URLSearchParams(search);
      this.state = {
        status: params.get('status') || '',
        effortMin: params.get('effortMin') || '',
        effortMax: params.get('effortMax') || '',
        changed: false,
      };
      this.onChangeStatus = this.onChangeStatus.bind(this);
      this.ApplyFilter = this.ApplyFilter.bind(this);
      this.showOriginalFilter = this.showOriginalFilter.bind(this);
      this.onChangeEffortMin = this.onChangeEffortMin.bind(this);
      this.onChangeEffortMax = this.onChangeEffortMax.bind(this);
    }

    componentDidUpdate(prevProps) {
      const { location: { search: prevSearch } } = prevProps;
      const { location: { search } } = this.props;
      if (prevSearch !== search) {
        this.showOriginalFilter();
      }
    }

    onChangeStatus(e) {
      this.setState({ status: e.target.value, changed: true });
    }

    onChangeEffortMin(e) {
      const effortString = e.target.value;
      if (effortString.match(/^\d*$/)) {
        this.setState({ effortMin: e.target.value, changed: true });
      }
    }

    onChangeEffortMax(e) {
      const effortString = e.target.value;
      if (effortString.match(/^\d*$/)) {
        this.setState({ effortMax: e.target.value, changed: true });
      }
    }

    showOriginalFilter() {
      const { location: { search } } = this.props;
      const params = new URLSearchParams(search);
      this.setState({
        status: params.get('status') || '',
        effortMin: params.get('effortMin') || '',
        effortMax: params.get('effortMax') || '',
        changed: false,
      });
    }

    ApplyFilter() {
      const { status, effortMin, effortMax } = this.state;
      const { history, urlBase } = this.props;

      const params = new URLSearchParams();
      if (status) params.set('status', status);
      if (effortMin) params.set('effortMin', effortMin);
      if (effortMax) params.set('effortMax', effortMax);

      const search = params.toString() ? `?${params.toString()}` : '';
      history.push({ pathname: urlBase, search });
    }

    render() {
      const { status, changed } = this.state;
      const { effortMin, effortMax } = this.state;
      return (
        <Row>
          <Col xs={6} sm={4} md={3} lg={2}>
            <Form.Group>
              <Form.Label>Status:</Form.Label>
              <Form.Control
                as="select"
                size="md"
                custom
                value={status}
                onChange={this.onChangeStatus}
              >
                <option value="">(All)</option>
                <option value="New">New</option>
                <option value="Assigned">Assigned</option>
                <option value="Fixed">Fixed</option>
                <option value="Closed">Closed</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
            <Form.Group>
              <Form.Label>Effort between:</Form.Label>
              <InputGroup>
                <Form.Control value={effortMin} onChange={this.onChangeEffortMin} />
                <InputGroup.Append>
                  <InputGroup.Text>-</InputGroup.Text>
                </InputGroup.Append>
                <Form.Control value={effortMax} onChange={this.onChangeEffortMax} />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
            <Form.Group>
              <Form.Label>&nbsp;</Form.Label>
              <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                <ButtonGroup className="mr-2" aria-label="Filter group">
                  <Button variant="success" type="button" onClick={this.ApplyFilter}>
                    Apply
                  </Button>
                  {'   '}
                  <Button variant="danger" type="button" onClick={this.showOriginalFilter} disabled={!changed}>
                    Reset
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Form.Group>
          </Col>
        </Row>
      );
    }
  },
);
