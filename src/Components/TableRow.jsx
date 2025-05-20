import React from 'react';
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router';
const TableRow = ({plant}) => {

    const {_id,image,plantname,category,carelevel} = plant;
    return (
        
             <tr>
              
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                
                </div>
              </td>

              <td>
                {plantname}
                
              </td>
              <td>{category}</td>
              <td>{carelevel}</td>

              <td>
                <Link to={`/details/${_id}`} className="btn bg btn-circle bg-green-600 text-2xl text-white  hover:bg-green-900"><FiExternalLink /></Link>
              </td>
            </tr>
        
    );
};

export default TableRow;