import React from 'react';
import { 
    Card, CardImg, CardGroup, 
    CardBody, CardTitle, CardSubtitle, 
    CardText, Button
} from "reactstrap";

export default class Home extends React.Component {
    render () {
        return (
            <>
                <h1 styles={{margin: "1rem"}}>
                    Meet the superstars of the month!
                </h1>
                <CardGroup>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={this.props.cats[0].image}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            {this.props.cats[0].name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Origin: {this.props.cats[0].origin} <br/>
                            Lifespan: {this.props.cats[0].life_span}
                        </CardSubtitle>
                        <CardText>
                            {this.props.cats[0].description}
                        </CardText>
                        <Button>
                            Button
                        </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={this.props.promos[0].image}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            {this.props.promos[0].name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Origin: {this.props.promos[0].origin} <br/>
                            Lifespan: {this.props.promos[0].life_span}
                        </CardSubtitle>
                        <CardText>
                            {this.props.promos[0].description}
                        </CardText>
                        <Button>
                            Button
                        </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={this.props.staff[0].avatar}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            {this.props.staff[0].name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Position: {this.props.staff[0].designation}
                        </CardSubtitle>
                        <CardText>
                            {this.props.staff[0].quote}
                        </CardText>
                        <Button>
                            Button
                        </Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </>
        )
    }
}