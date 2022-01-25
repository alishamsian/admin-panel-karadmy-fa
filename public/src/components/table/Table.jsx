import { useState } from 'react';
import './table.css'

const Table = props => {

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0 , Number(props.limit)) : props.bodyData

    const [dataShow, setDataShow] = useState(initDataShow);
  
    return (
  
        <div>
            <div className="table-wrapper">
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map((item , index)=> props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        props.bodyData &&props.renderBody ? (
                            <tbody>
                                {
                                    dataShow.map((item , index)=>props.renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
        </div>
  );
};

export default Table;


