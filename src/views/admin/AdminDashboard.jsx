import React from 'react';
import {MdCurrencyExchange} from "react-icons/md"
import Chart from 'react-apexcharts';

const AdminDashboard = () => {

    const state = {

        series : [
            {
                name: "Orders",
                data: [23, 34, 45, 56, 76, 34, 23, 76, 87, 78, 34, 45, 67]
            },
            {
                name: "Revenue",
                data: [67, 39, 45, 56, 90, 56, 23, 56, 87, 78, 98, 34]
            },
            {
                name: "Sellers",
                data: [34, 39, 56, 56, 80, 67, 23, 56, 98, 78, 45, 56, 67, 78, 78]
            },
        ],

        options : {
            color : ['#181ee8', '#181ee8'],
            plotOptions : {
                radius: 30
            },
            chart : {
                background : 'transparent',
                foreColor : '#d0d2d6'
            },
            dataLabels : {
                enable : false
            },
            strock : {
                show : true,
                curve : ['smooth', 'straight', 'stepline'],
                lineCap : 'butt',
                colors : '#f0f0f0',
                width : .5,
                dashArray : 0
            },
            xaxis : {
                categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
                             'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend : {
                position : 'top'
            },
            responsive : [
                {
                    breakpoint : 565, 
                    yaxis : {
                             categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
                             'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                            },
                    options : {
                                plotOptions : {
                                    bar : {
                                        horizontal : true
                                    }
                                },
                                chart : {
                                    height : "550px"
                                }
                              }
                }
            ]
        }
    }



    return (
        <div className='px-2 md:px-7 py-5'>
             <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>

                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2>$900</h2>
                        <span>Total Sale</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg'/>
                    </div>
                   
                </div>
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2>$900</h2>
                        <span>Total Sale</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg'/>
                    </div>
                   
                </div>
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2>$900</h2>
                        <span>Total Sale</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg'/>
                    </div>
                   
                </div>
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2>$900</h2>
                        <span>Total Sale</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg'/>
                    </div>
                   
                </div>
             </div>

             <div className='w-full flex flex-wrap mt-7'>
                <div className='w-full lg:w-7/12 lg:pr-3'>
                  <div className='w-full bg-[#6a5fdf] p-4 rounded-md'>
                    <Chart options={state.options} series={state.series} type='bar'
                    height={350}  />
                  </div>

                </div>

             </div>
            




        </div>
    );
};

export default AdminDashboard;