import { NavLink } from 'react-router-dom';
export function Navigation() { return <header className="nav"><NavLink to="/" className="brand" aria-label="DancingEscape home"><span className="brand-mark">✦</span><span>Dancing<span>Escape</span></span></NavLink><nav aria-label="Hoofdnavigatie"><NavLink to="/" end>Muziek</NavLink><NavLink to="/about">Over ons</NavLink></nav></header>; }
