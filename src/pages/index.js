import * as React from "react"
import {useState, useEffect} from 'react'
import favicon from '/'

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const contentStyle = {
  display: 'flex',
   gap: '12px', 
   flexDirection: 'column', 
   maxWidth: '650px',
   width: '-webkit-fill-available',
   fontSize: '18px'
  }

const tableStyle = {
  borderSpacing: '8px',
  backgroundColor: 'white',
  border: '1px solid',
  borderRadius: '8px',
  borderColor: 'gray'
}

const inputStyle = {
  borderRadius: '4px',
  border: '1px solid black',
  padding: '4px',
  fontSize: '24px',
  width: '50px',
}

const actionButtonStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

const buttonStyle = {
  width: 'fit-content',
  backgroundColor: 'green',
  border: 'none',
  borderRadius: '8px',
  fontSize: '18px',
  padding: '8px',
  color: 'white',
  cursor: 'pointer',
}
const copyButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'green',
}

const clearButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'gray',
}

const textareaStyle = {
  resize: 'none',
  overflow: 'hidden',
  fontFamily: 'inherit',
  fontSize: '18px',
  borderRadius: '8px',
  padding: '8px',
}
const itemList = [
  {
    metric: 'kg',
    name: 'Giblet'
  },
  {
    metric: 'kg',
    name: 'Liver'
  },
  {
    metric: 'kg',
    name: 'Hearts'
  },
  {
    metric: 'box',
    name: 'Necks'
  },
  {
    metric: 'boxes',
    name: 'WINGS XXLarge'
  },
  {
    metric: 'boxes',
    name: 'Supreme XL FRESH & INGHAM BRAND no steggles l/s'
  },
  {
    metric: 'boxes',
    name: 'Inghams size 9 to 11'
  },
  {
    metric: 'boxes',
    name: 'Baiada size 17 birds'
  },
  {
    metric: 'boxes',
    name: ' Baiada size 21 to 23 bird'
  },
  {
    metric: 'boxes',
    name: 'Baiada size 26 to 32 bird big size l/s'
  },
  {
    metric: 'kg',
    name: 'Maryland fillet skin off'
  },
  {
    metric: 'kg',
    name: 'Maryland fillet skin on'
  },
  {
    metric: 'kg',
    name: 'Drumstick fillet off'
  },
  {
    metric: 'kg',
    name: 'Spare'
  },
  {
    metric: 'boxes',
    name: 'Ribs skin on'
  },
  {
    metric: 'boxes',
    name: 'Chest bone'
  },
  {
    metric: 'kg',
    name: 'Breast fillet skinless'
  },
  {
    metric: 'kg',
    name: 'Breast fillet skin on'
  },
  {
    metric: 'kg',
    name: 'Spare ribs skin off'
  },
]

const metricWithSpace = ['box', 'boxes']

const metricToString = (metric) => {
  if (metricWithSpace.includes(metric)) {
    return ` ${metric}`
  }
  return `${metric}`
}

const activeValue = (value) => {
  return !(!value || value <= '0')
}


const IndexPage = () => {
  const [templateText, setTemplateText] = useState("")
  const [isCopyClicked, setIsCopyClicked] = useState(false)
  console.log({isCopyClicked})


  const handleClickCopy = () => {
    let textarea = document.querySelector('textarea')
    textarea.select()
    document.execCommand('copy');
    setIsCopyClicked(true)
  }

  useEffect(() => {
    if (isCopyClicked) {
      setTimeout(() => {
        setIsCopyClicked(false)
      }, 2500)
    }
  }, [isCopyClicked])

  const handleOnSubmit = () => {
    const itemRows = document.querySelectorAll('tr')
    let existingItems = []
    itemRows.forEach((item, index) => {
      if (index === 0) return
      const inputElement = item.querySelector('input[name="item-amount"]')
      if (!activeValue(inputElement.value)) return
      const metricElement = item.querySelector('td[name="item-metric"]')
      const nameElement = item.querySelector('td[name="item-name"]')
      const itemRowString = `${inputElement.value}${metricToString(metricElement.innerHTML)} ${nameElement.innerHTML}`
      existingItems.push(itemRowString)
    })
    const orderString = existingItems.join("\n")
    // setTemplateText 
    setTemplateText(orderString)
  }

  const handleInputBlur = ( e )  => {
    handleOnSubmit()
    const inputRow = e.target.parentElement

    // Check if active input
    if (!activeValue(e.target.value)) {
      inputRow.style.color = 'inherit'
      inputRow.style.border = '1px solid red'
    } else {
      // add text color to active row
      inputRow.style.color = 'green'
      inputRow.style.border = 'none'

    }
  }

  const handleClickClear = () => {
    window.location.reload();
  }

  return (
    <main style={pageStyles}>
      <h1>PoultryLine Order Template 🐔</h1>
      <div style={contentStyle}>
     <table style={tableStyle}>
        <tr>
          <th>Amount</th>
          <th>Metric</th>
          <th>Item Name</th>
        </tr>
        {itemList.map((item, index) => {
          return(
          <tr>
          <input type="number" min="0" id={index} name="item-amount" onChange={handleInputBlur} style={inputStyle}/>
          <td name="item-metric">{item.metric}</td>
          <td name="item-name">{item.name}</td>
        </tr>)
        })}
      </table>
    <div style={actionButtonStyle}>
      <button onClick={handleClickCopy} style={copyButtonStyle}>{isCopyClicked ? 'copied!' : 'copy'}</button>
      <button onClick={handleClickClear} style={clearButtonStyle}>clear</button>
    </div>
      <textarea id="template-text" name="template-text" rows={itemList.length} cols="50" value={templateText} contenteditable='false' style={textareaStyle}/>
      </div>
      <p>Made with ❤️ by Laura Pham</p>
    </main>
  )
}

export default IndexPage

export const Head = () => {<><title>Home Page</title><link rel="icon" type="image/x-icon" href="/images/favicon.ico"/></>}
