import React from 'react';
import { Container } from 'reactstrap';

export default class Home extends React.Component {
    render () {
        return (
            <>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6 content">
                                <h1>Ecstacy</h1>
                                {/* <h5>We take inspiration from the world's best cuisines and create a fusion that will melt your taste buds!</h5> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Container>
                    <h1 styles={{margin: "1rem"}}>
                        Meet the superstars of the month!
                    </h1>
                </Container>
            </>
        )
    }
}