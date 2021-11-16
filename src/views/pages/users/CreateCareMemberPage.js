import React, { useState, useMemo } from 'react'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// core components
import GradientEmptyHeader from 'components/Headers/GradientEmptyHeader.js'

// react plugin used to create DropdownMenu for selecting items
// import Select2 from 'react-select2-wrapper'
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import ReactDatetime from "react-datetime";

import { createCareMember } from '../../../actions/careMembers.js'
// react plugin used to fetch list of countries
import countryList from 'country-list'


const CreateCareMemberPage = (props) => {

  let { id } = useParams()
  
  const dispatch = useDispatch()
  const careRoles = useSelector( (state) => {
    return state.categories.careRoles.map(role => {return {"value": role.id, "label":role.name}})
  });
  const groups =  useSelector( (state) => {
    return state.groups.map(group => {return {"value": group.id, "label":group.name}})
  });

  const employees = useSelector((state) => state.employees)
  let employee = employees.find((employee) => employee.id === parseInt(id))


  // const [selectedCountry, setSelectedCountry] = useState('')
  const initialState = {
    onBoardDate: '',
    offBoardDate: '',
    employee: null,
    role: '',
    group: '',
  }
  
  const date = new Date()
  const defaultOffBoardDate =date.setDate(date.getDate() + 365)


  const [ role, setRole ] = useState(careRoles[0]);
  const [ group, setGroup ] = useState(groups[0]);
  const [ onboardingDate, setOnboardingDate ] = useState(date);
  const [ offboardingDate, setOffboardingDate ] = useState(defaultOffBoardDate);
  

  const [careMember, setCareMember] = useState(initialState)

  



  const onBoardDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()-1}`

  // const offBoardDate = `${date.getDate()}/${date.getMonth() + 1}/${
  //   date.getFullYear() + 1
  // }` //OffBoard Date is 1 year from on Board date


 


  const onChangeOffboardingDate = (dateAsMoment) => {    
    setOffboardingDate(dateAsMoment.format('D-MM-YYYY'));
  };



  const saveCareMember = () => {
    
    const careMemberInfo = {
      onBoardDate: onBoardDate,
      offBoardDate: offboardingDate,
      employee: employee.id,
      role: 'care Advocate',
      group: group,
      careMember: true,
    }

    dispatch(createCareMember(careMemberInfo))
      .then((data) =>
        setCareMember({
          onBoardDate: onBoardDate,
          offBoardDate: offboardingDate,
          employee: employee.id,
          role: 'care Advocate',
          group: group,
        })
      )
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <GradientEmptyHeader name="users" />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">New Care Member</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      type="button"
                      color="info"
                      href="#dsfkjlsi39ds9d97876s7d"
                      onClick={(e) => props.history.push('/admin/employees')}
                    >
                      Back to Employees
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Care Member information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Onboard Date
                          </label>
                          <Input
                            id="input-first-name"
                            value={onBoardDate}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Auto Offboard Date
                          </label>
                          <ReactDatetime                   
                            // inputProps={{
                            //   placeholder: "Hire date",
                            // }}
                            value={offboardingDate}
                            onChange={(e) =>
                              setOffboardingDate(e)
                            }
                            timeFormat={false}
                          />

                          {/* <Input
                            id="input-last-name"
                            value={offBoardDate}
                            onChange={(e) => e.preventDefault}
                            type="text"
                          /> */}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-care-role"
                          >
                            Care Role
                          </label>
                          {/* <Select2
                            className="form-control"
                            defaultValue="1"
                            data={careRoles}                           
                          /> */}

                        <Select
                            id="careRole"
                            components = {makeAnimated()}
                            options = {careRoles}
                            onChange = {item => setRole({"id":item.value, "name":item.label})}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Group
                          </label>
                          <Select
                            id="defaultGroup"
                            components = {makeAnimated()}
                            options = {groups}
                            onChange = {item => setGroup({"id":item.value, "name":item.label})}
                          />

                          {/* <Select2
                            className="form-control"
                            options={{
                              placeholder: 'Default Group',
                            }}
                            data={countryList.getNames()}
                            onChange={(event) =>
                              setSelectedCountry(event.target.value)
                            }
                            value={selectedCountry}
                          /> */}
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            id="input-first-name"
                            value={employee.firstName}
                            type="text"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            id="input-last-name"
                            value={employee.lastName}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            International Name
                          </label>
                          <Input
                            id="input-username"
                            value={employee.internationalName}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            id="input-email"
                            value={employee.email}
                            disabled={true}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            value={employee.address}
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            value={employee.city}
                            id="input-city"
                            placeholder="City"
                            type="text"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            value={employee.country}
                            id="input-country"
                            placeholder="Country"
                            type="text"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            value={employee.postalCode}
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Company Data
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">Title</label>
                          <Input
                            id="title"
                            value={employee.title}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Company Phone
                          </label>
                          <Input
                            id="companyPhone"
                            value="+372 77645322"
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Company Code
                          </label>
                          <Input
                            id="input-postal-code"
                            value={employee.companyCode}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Business Unit
                          </label>
                          <Input
                            id="input-postal-code"
                            value={employee.businessUnit.name}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Cost Center
                          </label>
                          <Input
                            id="input-postal-code"
                            value={employee.costCenter}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Management Group
                          </label>
                          <Input
                            id="input-postal-code"
                            value={employee.managementGroup}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Button
                        color="primary"
                        type="button"
                        onClick={saveCareMember}
                      >
                        Save
                      </Button>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CreateCareMemberPage
