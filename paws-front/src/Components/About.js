import React from 'react'
import { 
    Container, UncontrolledCarousel, 
    BreadcrumbItem, Button, Card, 
    CardBody, CardText, CardImg, CardTitle, 
    CardHeader, Breadcrumb, Row, Col 
} from 'reactstrap'
import { Link } from "react-router-dom"

export default function About() {
    return (
        <>
            <UncontrolledCarousel
                items={[
                    {
                    altText: 'Slide 1',
                    key: 1,
                    src: 'https://picsum.photos/id/123/1200/600'
                    },
                    {
                    altText: 'Slide 2',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/600'
                    },
                    {
                    altText: 'Slide 3',
                    key: 3,
                    src: 'https://picsum.photos/id/678/1200/600'
                    }
                ]}
            />
            <Container>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>About Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-6">
                        <h2>Our History</h2>
                        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardHeader className="bg-info text-white">Facts At a Glance</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">3 Feb. 2013</dd>
                                    <dt className="col-6">Major Stake Holder</dt>
                                    <dd className="col-6">HK Fine Foods Inc.</dd>
                                    <dt className="col-6">Last Year's Turnover</dt>
                                    <dd className="col-6">$1,250,375</dd>
                                    <dt className="col-6">Employees</dt>
                                    <dd className="col-6">40</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Row xs={1} md={3} className="g-3 mb-3 mt-2">
                    <Col>
                        <Card>
                            <CardImg variant="top" src="assets/images/cute-cat.jpg" />
                            <CardBody>
                            <CardTitle tag="h2">Our vision</CardTitle>
                            <CardText>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </CardText>
                            <Button color="info">Our Vision</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg variant="top" src="assets/images/cute-cat.jpg" />
                            <CardBody>
                                <CardTitle tag="h2">Our mission</CardTitle>
                                <CardText>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button color="info">Our Mission</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg variant="top" src="assets/images/cute-cat.jpg" />
                            <CardBody>
                            <CardTitle tag="h2">Annual report</CardTitle>
                            <CardText>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </CardText>
                            <Button color="info">Annual Report</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}