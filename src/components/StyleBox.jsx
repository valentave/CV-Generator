

function StyleBox({onChangeFont, color, onChangeColor, onClickLayout}) {
    return (
        <details className="inputs-box">
            <summary className="box-title">Customize</summary>
            <div className="inputs-box">
                <h3>Layout</h3>
                <div className="button-container">
                    <button id="layout-top" className="layout-button" onClick={onClickLayout}>
                        <div className="button-box-vertical">
                            <div className="button-box-color-top" style={{background: color}}></div>
                            <div className="button-box-white-down"></div>
                        </div>
                        <div><p>Top</p></div>
                    </button>
                    <button id="layout-left" className="layout-button" onClick={onClickLayout}>
                        <div className="button-box">
                            <div className="button-box-color layout-button-left" style={{background: color}}></div>
                            <div className="button-box-white layout-button-right"></div>
                        </div>
                        <div><p>Left</p></div>
                    </button>
                </div>
            </div>

            <div className="inputs-box">
                <h3>Color</h3>
                <div className="button-container">
                    <input defaultValue="#192657" 
                    type="color" 
                    name="layout-color" 
                    id="layout-color" 
                    className="color-input"
                    onChange={onChangeColor}/>
                </div>
            </div>

            <div className="inputs-box">
                <h3>Font</h3>
                <div className="button-container">
                    <button className="layout-button font-button" id="buttonSerif" onClick={onChangeFont}>
                        <p className="font-preview serif">Aa</p>
                        <p>Serif</p>
                    </button>
                    <button className="layout-button font-button" id="buttonSans" onClick={onChangeFont}>
                        <p className="font-preview sans">Aa</p>
                        <p>Sans</p>
                    </button>
                    <button className="layout-button font-button" id="buttonMono" onClick={onChangeFont}>
                        <p className="font-preview mono">Aa</p>
                        <p>Mono</p>
                    </button>
                </div>
            </div>
        </details>
    )
}

export default StyleBox