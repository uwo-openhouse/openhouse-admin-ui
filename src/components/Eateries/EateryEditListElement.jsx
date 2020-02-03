import { Badge, Card } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import React from 'react';
import { displayTime } from '../../service';


const EateryEditListElement = ({
    name, buildingName, openTime, closeTime,
}) => (
    <>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{`${displayTime(openTime)} - ${displayTime(closeTime)}`}</Card.Subtitle>
        <Card.Text>
            <Badge variant="info">{buildingName}</Badge>
        </Card.Text>

    </>
);

EateryEditListElement.propTypes = {
    name: PropTypes.string.isRequired,
    buildingName: PropTypes.string.isRequired,
    openTime: PropTypes.string.isRequired,
    closeTime: PropTypes.string.isRequired,
};

export default EateryEditListElement;
