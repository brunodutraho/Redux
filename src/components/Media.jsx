import React from "react";
import { connect } from 'react-redux'

import Card from "./Card";

const Media = (props) => {
	const  { min, max } = props
	return (
		<Card title="Média dos Números" green>
			<div>
				<span>
                    <span>Resultado: </span>
					<strong>{(max + min) / 2}</strong>
				</span>
			</div>
		</Card>
	);
};

function mapStateToProps(state) {
	return {
		min: state.numeros.min,
		max: state.numeros.max
	}
}
export default connect(mapStateToProps)(Media)

/* COMPONENTES DE ESTADOS COM LIGAÇÃO DIRETA E INDIRETA USANDO USESTATE

import React from "react";

import Card from "./Card";

export default (props) => {
	const {min, max} = props
	return (
		<Card title="Média dos Números" green>
			<div>
				<span>
                    <span>Resultado: </span>
					<strong>{(max + min) / 2}</strong>
				</span>
			</div>
		</Card>
	);
};

*/