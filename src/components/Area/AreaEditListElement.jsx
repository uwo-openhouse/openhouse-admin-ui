import { Badge, Card } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import Color from 'color';
import React from 'react';


const AreaEditListElement = ({ name, color }) => (
    <>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            <Badge style={{
                background: color,
                color: Color(color).negate().string(),
            }}
            >
                {color}
            </Badge>
        </Card.Text>

    </>
);

AreaEditListElement.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default AreaEditListElement;
