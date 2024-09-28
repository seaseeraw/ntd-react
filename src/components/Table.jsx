import React from 'react'

export default function Table({taskList}) {
    const entryList = taskList.filter((item) => item.type === "entry");
    const badList = taskList.filter((item) => item.type === "bad");
  return (
    <div className="row mt-5">
    <div className="col-md ">
        <h3 className="text-center">Entry List</h3>
        <hr/>
        
        <table className="table table-striped table-hover border">
            <tbody id="entryList">
             
            {
                entryList.map((item, i) => {
                    return<tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hr}hr</td>
                <td className="text-end">
                  <button onclick="handleOnDelete('${item.id}')" className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button onclick="switchTask('${item.id}', 'bad')" className="btn btn-success">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </td>
                </tr>
                  })
              }

            </tbody>
          </table>
    </div>
   
    <div className="col-md">
        <h3 className="text-center">Bad List</h3>
        <hr/>
        
        <table className="table table-striped table-hover border">
           
            <tbody id="badList">
             {
                badList.map((item, i) => {
                    return<tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hr}hr</td>
                <td class="text-end">
                 
                  <button onclick="switchTask('${item.id}', 'entry')" class="btn btn-warning">
                    <i class="fa-solid fa-arrow-left"></i>
                  </button>
                  <button onclick="handleOnDelete('${item.id}')" class="btn btn-danger">
                  <i class="fa-solid fa-trash"></i>
                </button>
                </td>
                </tr>
                  })
             }

            </tbody>
          </table>
          <div className="alert alert-success">You could have saved <span id="savedhr"></span>hr</div>
    </div>
    
  </div>

  )
}
