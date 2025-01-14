import React from "react";
import { connect } from 'react-redux'

import Card from "./Card";

const Sorteio = (props) => {
	const {min, max} = props
	const aleatorio = Number.parseInt(Math.random() * (max - min))
	return (
		<Card title="Sorteio de um Números" purple>
			<div>
				<span>
                    <span>Resultado: </span>
					<strong>{aleatorio}</strong>
				</span>
			</div>
		</Card>
	);
};

const mapStateToProps = state => {
	return {
		min: state.numeros.min,
        max: state.numeros.max,
	}
}

export default connect(mapStateToProps)(Sorteio)

/* COMPONENTES DE ESTADOS COM LIGAÇÃO DIRETA E INDIRETA USANDO USESTATE

import React from "react";

import Card from "./Card";

export default (props) => {
	const { min, max } = props
	const aleatorio = Number.parseInt(Math.random() * (max - min))
	return (
		<Card title="Sorteio de um Números" purple>
			<div>
				<span>
                    <span>Resultado: </span>
					<strong>{aleatorio}</strong>
				</span>
			</div>
		</Card>
	);
};

*/