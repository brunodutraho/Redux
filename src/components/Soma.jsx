import React from "react";
import { connect } from 'react-redux'

import Card from "./Card";

const Soma = (props) => {
	const {min, max} = props;
	return (
		<Card title="Soma dos Números" blue>
			<div>
				<span>
                    <span>Resultado: </span>
					<strong>{max + min}</strong>
				</span>
			</div>
		</Card>
	);
};

const mapStateToProps = state => {
	return {
    min: state.numeros.min,
    max: state.numeros.max
}};

export default connect(mapStateToProps)(Soma);

/* COMPONENTES DE ESTADOS COM LIGAÇÃO DIRETA E INDIRETA USANDO USESTATE

import React from "react";

import Card from "./Card";

export default (props) => {
	const {min, max} = props;
	
	return (
		<Card title="Soma dos Números" blue>
			<div>
				<span>
                    <span>Resultado: </span>
					<strong>{max+ min}</strong>
				</span>
			</div>
		</Card>
	);
};

*/