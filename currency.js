import React from 'react'
// import image from '../images/cash-calculator.svg'
import data from '../Data'
import './index.css'

import SelectCurrency from '../SelectCurrency'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currencies: data.currencies,
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAval: data.currencies[0].sellRate,
      currencyBval: data.currencies[1].sellRate,
    }

    this.onSelectCurrency = this.onSelectCurrency.bind(this)
  }

  onSelectCurrency(code) {
    const {currencies, currencyAval} = this.state
    const currency = currencies.filter(curre => curre.code === code)
    this.setState({
      currencyB: currency[0],

      // this is an array with one item
      currencyBval: currencyAval * currency[0].sellRate,
    })
  }

  onChangeHandler(e, currency) {
    const {currencyA, currencyB} = this.state

    if (currency === 'A') {
      const newValueA = e.target.value
      this.setState({
        currencyAval: newValueA,
        currencyBval: newValueA * currencyB.sellRate,
      })
    } else if (currency === 'B') {
      const newValueB = e.target.value
      this.setState({
        currencyAval: newValueB / currencyB.sellRate,
        currencyBval: newValueB,
      })
    }
  }

  logout = () => {
    const {history} = this.props
    localStorage.removeItem('name')
    localStorage.removeItem('password')
    history.push('/login')
  }

  render() {
    const {
      currencies,
      currencyA,
      currencyB,
      currencyAval,
      currencyBval,
    } = this.state
    return (
      <div className="bg-container">
        <header>
          <div className="container">
            <h1>Currency Converter</h1>
            <button className="button1" onClick={this.logout}>
              Logout
            </button>
          </div>
        </header>
        <div>
          <div className="row row-select-currency">
            <div className="col-md-6 col-md-offset-3">
              <h2>Select Currency</h2>
              <p>
                {}
                <SelectCurrency
                  currencies={currencies}
                  onSelectCurrency={this.onSelectCurrency}
                />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 currency-from-input">
              <h3 className={`currency-flag ${currencyA.code}`}>
                {currencyA.name}
              </h3>
              {}
              <div className="input-group">
                <span className="input-group-addon">{currencyA.sign}</span>
                <input
                  type="number"
                  value={currencyAval}
                  className="form-control"
                  aria-describedby="basic-addon2"
                  step="1"
                  pattern="\d\.\d{2}"
                  onChange={e => {
                    this.onChangeHandler(e, 'I')
                  }}
                />
                <span className="input-group-addon" id="basic-addon2">
                  {currencyA.code}
                </span>
              </div>
            </div>

            <div className="col-sm-6 currency-to-input">
              <h3 className={`currency-flag ${currencyB.code}`}>
                {currencyB.name}
              </h3>
              {}
              <div className="input-group">
                <span className="input-group-addon">{currencyB.sign}</span>
                <input
                  type="number"
                  value={currencyBval}
                  className="form-control"
                  aria-describedby="basic-addon3"
                  step="1"
                  pattern="\d\.\d{2}"
                  onChange={e => {
                    this.onChangeHandler(e, 'A')
                  }}
                />
                <span className="input-group-addon" id="basic-addon3">
                  {currencyB.code}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {}
              <p>
                Exchange Rate{' '}
                {`${currencyA.sign} ${currencyA.sellRate} ${currencyA.code}`} ={' '}
                {`${currencyB.sign} ${currencyB.sellRate} ${currencyB.code}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
