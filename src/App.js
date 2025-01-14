import logo from "./logo.svg";
import "./App.css";

import Card from "./components/Card";
import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {

	return (
		<div className="App">
			<h1>Exercicío React-Redux (Simples)</h1>
			<div className='linha'>
				<Intervalo onMinChanged={33}/> 
			</div>
			<div className='linha'>
				<Media />
				<Soma />
				<Sorteio />
			</div>
		</div>
	);
}

export default App;

/* COMPONENTES DE ESTADOS COM LIGAÇÃO DIRETA E INDIRETA USANDO USESTATE

import React, { useState } from 'react'
import logo from "./logo.svg";
import "./App.css";

import Card from "./components/Card";
import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {

  const [min, setMin] = useState(10)
  const [max, setMax] = useState(20)

	return (
		<div className="App">
			<h1>Exercicío React-Redux (Simples)</h1>
			<div className='linha'>
				<Intervalo min={min} max={max}onMinChanged={setMin} onMaxChanged={setMax}> 
				</Intervalo>
			</div>
			<div className='linha'>
				<Media min={min} max={max}/>
				<Soma min={min} max={max}/>
				<Sorteio min={min} max={max}/>
			</div>
		</div>
	);
}

export default App;

*/