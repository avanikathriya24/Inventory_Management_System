import React, { useState } from 'react';
import "../styles/Composite_item.css";

function MyForm() {
  const [rows, setRows] = useState([{ quantity: '', sellingPrice: '', costPrice: '' }]);

  // Handle input change
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  // Handle adding a new row
  const addNewRow = (event) => {
    event.preventDefault();
    setRows([...rows, { quantity: '', sellingPrice: '', costPrice: '' }]);
  };

  // Calculate totals
  const calculateTotal = (type) => {
    return rows.reduce((acc, row) => {
      const quantity = parseFloat(row.quantity) || 0;
      const price = parseFloat(row[type]) || 0;
      return acc + (quantity * price);
    }, 0).toFixed(2);
  };


  return (
    <>
      <form className="myform-container">
        <fieldset className="myform-fieldset">
          <legend className="myform-legend">Composite Product</legend>

          <table className="myform-table">
            <tbody>
              <tr className="myform-row">
                <td className="myform-label">
                  <label htmlFor="name" className="myform-label">Name:</label>
                </td>
                <td>
                  <input type="text" id="name" name="name" className="myform-input myform-input-full-width" required />
                </td>
              </tr>
              <tr className="myform-row">
                <td className="myform-label">
                  <label htmlFor="unit" className="myform-label">Unit:</label>
                </td>
                <td>
                  <select id="unit" name="unit" className="myform-select">
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="cm">cm</option>
                    <option value="m">m</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label htmlFor="name" className="myform-label">Associate items:</label>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td>Item Details</td>
                        <td>Quantity</td>
                        <td>Selling Price</td>
                        <td>Cost Price</td>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, index) => (
                        <tr key={index}>
                          <td><input type="text" name="item" className="myform-inputc" /></td>
                          <td>
                            <input
                              type="number"
                              name="quantity"
                              value={row.quantity}
                              className="myform-inputc"
                              onChange={event => handleInputChange(index, event)}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              name="sellingPrice"
                              value={row.sellingPrice}
                              className="myform-inputc"
                              onChange={event => handleInputChange(index, event)}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              name="costPrice"
                              value={row.costPrice}
                              className="myform-inputc"
                              onChange={event => handleInputChange(index, event)}
                            />
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td>
                          <div className="pt-2">
                            <a href="#" className="myform-add-row-button" onClick={addNewRow}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon icon-sm text-open fill-azure-blue align-middle">
                                <path d="M256 15C122.9 15 15 122.9 15 256s107.9 241 241 241 241-107.9 241-241S389.1 15 256 15zm122 263H278v100c0 12.2-9.8 22-22 22s-22-9.8-22-22V278H134c-12.2 0-22-9.8-22-22s9.8-22 22-22h100V134c0-12.2 9.8-22 22-22s22 9.8 22 22v100h100c12.2 0 22-9.8 22-22s-9.8-22-22-22z"></path>
                                <path fill="#FFF" d="M378 234H278V134c0-12.2-9.8-22-22-22s-22 9.8-22 22v100H134c-12.2 0-22 9.8-22 22s9.8 22 22 22h100v100c0 12.2 9.8 22 22 22s22-9.8 22-22V256h100c12.2 0 22-9.8 22-22s-9.8-22-22-22z"></path>
                              </svg>
                              <span>Add New Row</span>
                            </a>
                          </div>
                        </td>
                        <td className="myform-button-cell">Total:</td>
                        <td className="myform-button-cell">{calculateTotal('sellingPrice')}</td>
                        <td className="myform-button-cell">{calculateTotal('costPrice')}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className="sales-info">Selling Price: {calculateTotal('sellingPrice')}</td>
                <td className="purchase-info">Cost Price: {calculateTotal('costPrice')}</td>
              </tr>
              <tr>

              <td colSpan="2" className="myform-button-cell">
                <button type="submit" className="myform-button myform-button-save">
                  Save
                </button>
                <button type="button" className="myform-button myform-button-cancel">
                  Cancel
                </button>
              </td>
            </tr>
            </tbody>
                      </table>

        </fieldset>
      </form>
    </>
  );
}

export default MyForm;
