import * as React from "react"
import {useState, useEffect} from 'react'

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
    name: 'Heart'
  },
  {
    metric: 'box',
    name: 'Necks'
  },
  {
    metric: 'kg',
    name: 'Spare ribs skin on'
  },
  {
    metric: 'kg',
    name: 'Drumstick fillet skinless'
  },
  {
    metric: 'box',
    name: 'WINGS XXLarge'
  },
  {
    metric: 'box',
    name: 'Supreme XL FRESH & INGHAM BRAND'
  },
  {
    metric: 'box',
    name: 'Baiada size 17 birds'
  },
  {
    metric: 'box',
    name: ' Baiada size 21 to 23 birds'
  },
  {
    metric: 'box',
    name: 'Baiada size 26 to 32 birds'
  },
  {
    metric: 'box',
    name: 'Inghams size 9 to 11 birds'
  },
  {
    metric: 'box',
    name: 'Chest bone'
  },
  {
    metric: 'box',
    name: 'Boilers'
  },
  {
    metric: 'box',
    name: 'Schnitzel 220 grams'
  },{
    metric: 'box',
    name: 'Crumbed chicken Kiev'
  },
  {
    metric: 'kg',
    name: 'Maryland fillet skinless'
  },
  {
    metric: 'kg',
    name: 'Maryland fillet skin on'
  },
  {
    metric: 'kg',
    name: 'Spare ribs skinless'
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
    name: 'Tenderloin'
  },
]

const activeValue = (value) => {
  return !(!value || value <= '0')
}


const IndexPage = () => {
  const [templateText, setTemplateText] = useState("")
  const [isCopyClicked, setIsCopyClicked] = useState(false)
  // const [isLoadingPage, setIsLoadingPage] = useState(true)

  // useEffect(() => {
  //   setIsLoadingPage(false)
  // }, [])

  useEffect(() => {
    if (isCopyClicked) {
      setTimeout(() => {
        setIsCopyClicked(false)
      }, 2500)
    }
  }, [isCopyClicked])

  const handleClickCopy = () => {
    let textarea = document.querySelector('textarea')
    textarea.select()
    document.execCommand('copy');
    setIsCopyClicked(true)
  }


  const handleOnSubmit = () => {
    const itemRows = document.querySelectorAll('tr')
    let existingItems = []
    itemRows.forEach((item, index) => {
      if (index === 0) return
      const inputElement = item.querySelector('input[name="item-amount"]')
      if (!activeValue(inputElement.value)) return
      const metricElement = item.querySelector('td[name="item-metric"]')
      const nameElement = item.querySelector('td[name="item-name"]')
      const itemRowString = `${inputElement.value} ${metricElement.innerText} ${nameElement.innerText}`
      existingItems.push(itemRowString)
    })
    const orderString = existingItems.join("\n")
    // setTemplateText 
    setTemplateText(orderString)
  }

  const handleInputBlur = ( e )  => {
    // update metric innertext if value is greater than 1
    if (e.target.parentElement.querySelector('td[name="item-metric"]').innerText === "box" && e.target.value > 1) {
      e.target.parentElement.querySelector('td[name="item-metric"]').innerText = 'boxes'
    } else if (e.target.parentElement.querySelector('td[name="item-metric"]').innerText === "boxes" && e.target.value <= 1) {
      e.target.parentElement.querySelector('td[name="item-metric"]').innerText = 'box'
    }
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
  
  // if (!isLoadingPage) {
  //   return <LoadingPage/>
  // }

  return (
    <main className="flex items-center justify-center flex-col gap-4 m-4">
      <h1 className="text-2xl font-bold">PoultryLine Order Template 🐔</h1>
      <div id="page-content" className="flex justify-center flex-col gap-4">
        <table className="border rounded-lg border-separate p-2">
            <tr>
              <th>Amount</th>
              <th>Metric</th>
              <th>Item Name</th>
            </tr>
            {itemList.map((item, index) => {
              return(
              <tr>
              <input className="border border-black rounded-md my-1 w-12 text-lg text-center" type="number" min="0" id={index} name="item-amount" onChange={handleInputBlur} onWheel={(e) => e.target.blur()}/>
              <td name="item-metric">{item.metric}</td>
              <td name="item-name">{item.name}</td>
            </tr>)
            })}
          </table>
        <div className="flex justify-between w-full">
          <button onClick={handleClickCopy} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg" >{isCopyClicked ? 'COPIED!' : 'copy'}</button>
          <button onClick={handleClickClear} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg" >clear</button>
        </div>
        <textarea className="border rounded-lg w-full p-2" id="template-text" name="template-text" rows={itemList.length} value={templateText} contenteditable='false' />
      </div>
      <p>Made with ❤️ by Laura Pham</p>
    </main>
  )
}

export default IndexPage

export const Head = () => {<title>Home Page</title>}
