import React, { useEffect } from 'react'
import './ViewAsset.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ViewAsset() {


    const toogleState = useSelector(state => state.toogleState)

    useEffect(() => {
        let cls = document.getElementsByClassName('view-asset')[0];
        if (toogleState) {
            cls.style.left = "260px";
            cls.style.transition = "all 0.5s ease";
            cls.style.width = "calc(100% - 260px)";
        }
        if (!toogleState) {
            cls.style.left = "68px"
            cls.style.width = "calc(100% - 68px)";
        }
    }, [toogleState])

    return (
        <div className='view-asset'>
            <div className='create-asset'>
                <Link className='btn btn-success' to='/createasset'>Add
                    {/* <a className='btn btn-success'>Add</a> */}
                </Link>
            </div>
            <table className='table table-bordered'>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Code</th>
                        <th scope="col">Entity Type</th>
                        <th scope="col">Entity Name</th>
                        <th scope="col">Previleges</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><button className='btn btn-primary' data-toggle="modal" data-backdrop="static" data-target="#myModal">Add Previlege</button></td>
                        <td><button className='btn btn-danger'>Delete</button></td>
                    </tr>
                </tbody>
            </table>


            <div class="container">
                {/* <!-- Modal --> */}
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                        {/* <!-- Modal content--> */}
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Add Previleges</h4>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" >Upload</label>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" >Report</label>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" >Scheduler</label>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" >Create User</label>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewAsset
