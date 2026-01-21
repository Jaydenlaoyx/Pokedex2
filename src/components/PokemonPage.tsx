import { useState } from "react";
import { type Pokemon, typeColors, typeGlowColors } from "../data/pokemon";
import "../styles/PokemonPage.css";

interface PokemonPageProps {
    pokemon: Pokemon
    onClose: () => void;
}

export function PokemonPage( {pokemon, onClose }: PokemonPageProps ) {

    const primaryType: string = pokemon.types[0];
    const [selectedFormIndex, setSelectedFormIndex] = useState(-1);
    
    const allForms = [{ name: pokemon.name, sprite: pokemon.sprite, isBase: true },
        ...(pokemon.alternateForms || []).map(form => ({ ...form, isBase: false }))
    ];

    const currentForm = allForms[selectedFormIndex + 1] || allForms[0];
    const hasMultipleForms = allForms.length > 1;

    const nextForm = () => {
        setSelectedFormIndex((prev) => (prev + 1) % allForms.length);
    };

    const prevForm = () => {
        setSelectedFormIndex((prev) => (prev - 1 + allForms.length) % allForms.length);
    };

    return (
        <div className="pokemonPageContainer">
            <div className="pokemonPageContainerBg"
                style={{
                    boxShadow: `0 0 50px ${typeGlowColors[primaryType]}` 
                }}
            >
                {/* header */}
                <div className="headerContainer">
                    <div>
                        <div className="headerSpecimen">
                            SPECIMEN # {pokemon.id.toString().padStart(3, '0')} • GENERATION {pokemon.generation}
                        </div>
                        <h2 className="currentForm">
                            {currentForm.name}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="closeButton"
                    >
                        x
                    </button>
                </div>

                {/* Main Content - Scientific Diagram Layout */}
                <div className="mainContentContainer">
                    <div className="mainContentSubcontainer">
                        {/* Grid lines for scientific look */}
                        <div className="blueOverlay-parent">
                            <div className="blueOverlay-child"
                                style={{
                                    backgroundImage: `
                                    linear-gradient('#06b6d4' 1px, transparent 1px),
                                    linear-gradient(90deg,'#06b6d4' 1px, transparent 1px)
                                    `,
                                    backgroundSize: '50px 50px'
                                }}
                            />
                        </div>

                        {/* Central Pokemon Image */}
                        <div className="centralPokemonImageSectionContainer">
                            {/* Crosshair/Target Lines */}
                            <div className="crossLinesContainer">
                                <div className="horizontalLine"></div>
                                <div className="verticalLine"></div>
                            </div>

                            {/* Pokemon Image Container */}
                            <div className="pokemonImageContainer">
                                {/* Pulsing scan effect */}
                                <div 
                                    className="pulsingEffect"
                                    style={{ 
                                        backgroundColor: typeColors[primaryType],
                                        animationDuration: '3s'
                                    }}
                                />

                                {/* Navigation buttons for forms */}
                                {hasMultipleForms && (
                                    <>
                                        <button
                                            onClick={prevForm}
                                            className="leftFormNavigationButton"
                                        >
                                            {'<'}
                                        </button>
                                        <button
                                            onClick={nextForm}
                                            className="rightFormNavigationButton"
                                        >
                                            {'>'}
                                        </button>
                                    </>
                                )}

                                <img 
                                    src={currentForm.sprite}
                                    alt={currentForm.name}
                                    className="pokemonImage"
                                />
                            </div>

                            {/* Annotation Labels - Top Left */}
                            <div className="topLeftLabelContainer">
                                <div className="topLeftLabelSubcontainer">
                                    <div className="TLHorizontalLine"/>
                                    <div className="TLVerticalLine" style={{ left: 'calc(100% + 128px)' }} />
                                    <div className="classificationLabel">
                                        Classification
                                    </div>
                                    <div className="typingsContainer">
                                        {pokemon.types.map((type) => (
                                            <span
                                                key={type}
                                                className="pokemonTypeBadge"
                                                style={{ 
                                                    backgroundColor: `${typeColors[type]}80`,
                                                    border: `1px solid ${typeColors[type]}`
                                                }}
                                            >
                                                {type}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Annotation Labels - Top Right */}
                            <div className="topRightLabelContainer">
                                <div className="topRightLabelSubcontainer">
                                    <div className="TRHorizontalLine"/>
                                    <div className="TRVerticalLine" style={{ right: 'calc(100% + 128px)' }}/>
                                    <div className="physicalDataLabel">
                                        Physical Data
                                    </div>
                                    <div className="physicalDataContainer">
                                        <div>Height: <span className="heightAndWeightData">{(pokemon.height / 10).toFixed(1)}m</span></div>
                                        <div>Weight: <span className="heightAndWeightData">{(pokemon.weight / 10).toFixed(1)}kg</span></div>
                                    </div>
                                </div>
                            </div>

                            {/* Annotation Labels - Left Side */}
                            <div className="leftLabelContainer">
                                <div className="leftLabelSubcontainer">
                                    <div className="leftLabelLine" />
                                    <div className="combatStatsLabel">
                                        Combat Stats
                                    </div>
                                    <div className="combatStatsContainer">
                                        <div className="HPSection">
                                            <span className="HPLabel">HP</span>
                                            <div className="hpBar">
                                                <div 
                                                    className="hpBar-greenSection"
                                                    style={{ width: `${(pokemon.stats.hp / 255) * 100}%` }}
                                                />
                                            </div>
                                            <span className="hpData">{pokemon.stats.hp}</span>
                                        </div>
                                        <div className="ATKSection">
                                            <span className="ATKLabel">ATK</span>
                                            <div className="ATKBar">
                                                <div 
                                                    className="ATKBar-redSection"
                                                    style={{ width: `${(pokemon.stats.attack / 255) * 100}%` }}
                                                />
                                            </div>
                                            <span className="ATKData">{pokemon.stats.attack}</span>
                                        </div>
                                        <div className="DEFSection">
                                            <span className="DEFLabel">DEF</span>
                                            <div className="DEFBar">
                                                <div 
                                                    className="DEFBar-blueSection"
                                                    style={{ width: `${(pokemon.stats.defense / 255) * 100}%` }}
                                                />
                                            </div>
                                            <span className="DEFData">{pokemon.stats.defense}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Annotation Labels - Right Side */}
                            <div className="rightLabelContainer">
                                <div className="rightLabelSubcontainer">
                                    <div className="rightLabelLine"/>
                                    <div className="specialStatsLabel">
                                        Special Stats
                                    </div>
                                    <div className="specialStatsContainer">
                                        <div className="SPASection">
                                            <span className="SPALabel">SP.ATK</span>
                                            <div className="SPABar">
                                                <div 
                                                    className="SPABar-purpleSection"
                                                    style={{ width: `${(pokemon.stats.specialAttack / 255) * 100}%` }}
                                                />
                                            </div>
                                            <span className="SPAData">{pokemon.stats.specialAttack}</span>
                                        </div>
                                        <div className="SPDSection">
                                            <span className="SPDLabel">SP.DEF</span>
                                            <div className="SPDBar">
                                                <div 
                                                    className="SPDBar-orangeSection"
                                                    style={{ width: `${(pokemon.stats.specialDefense / 255) * 100}%` }}
                                                />
                                            </div>
                                            <span className="SPDData">{pokemon.stats.specialDefense}</span>
                                        </div>
                                        <div className="SPEEDSection">
                                            <span className="SPEEDLabel">SPEED</span>
                                            <div className="SPEEDBar">
                                                <div 
                                                    className="SPEEDBar-pinkSection"
                                                    style={{ width: `${(pokemon.stats.speed / 255) * 100}%` }}
                                                />
                                            </div>
                                            <span className="SPEEDData">{pokemon.stats.speed}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Annotation Labels - Bottom Left */}
                            <div className="bottomLeftLabelContainer">
                                <div className="bottomLeftLabelSubcontainer">
                                    <div className="BLHorizontalLine"/>
                                    <div className="BLVerticalLine" style={{ left: 'calc(100% + 128px)' }}/>
                                    <div className="abilitiesLabel">
                                        Abilities
                                    </div>
                                    <div className="abilitiesContainer">
                                        {pokemon.abilities.map((ability) => (
                                            <span
                                                key={ability}
                                                className="abilityBadge"
                                            >
                                                {ability}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Annotation Labels - Bottom Right */}
                            {pokemon.evolutionChain && (
                                <div className="bottomRightLabelContainer">
                                    <div className="bottomRightLabelSubcontainer">
                                        <div className="BRHorizontalLine"/>
                                        <div className="BRVerticalLine" style={{ right: 'calc(100% + 128px)' }}/>
                                        <div className="evolutionChainLabel">
                                            Evolution Chain
                                        </div>
                                        <div className="evolutionChainContainer">
                                            {pokemon.evolutionChain.prevName && (
                                                <>
                                                    <span className="preEvoName">{pokemon.evolutionChain.prevName}</span>
                                                    <span>→</span>
                                                </>
                                            )}
                                            <span className="currentEvoName">{pokemon.name}</span>
                                            {pokemon.evolutionChain.nextName && (
                                                <>
                                                    <span>→</span>
                                                    <span className="nextEvoName">{pokemon.evolutionChain.nextName}</span>
                                                </>
                                            )}
                                        </div>
                                        <div className="stageNumberLabel">
                                            Stage {pokemon.evolutionChain.stage}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Bottom Center - Description */}
                            <div className="bottomCenterContainer">
                                <div className="bottomCenterSubcontainer">
                                    <div className="bottomCenterLine"/>
                                    <div className="fieldNotesLabel">
                                        Field Notes
                                    </div>
                                    <p className="fieldNotes">
                                        "{pokemon.description}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form indicator
                {hasMultipleForms && (
                    <div className="formIndicator">
                        Form {selectedFormIndex + 2} of {allForms.length}
                    </div>
                )} */}
            </div>
        </div>
    );
}