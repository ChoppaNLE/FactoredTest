import ProfileCard from './ProfileCard'
import data from '../Data/data'

function CardCreator( {data} ) {

    let product_count = Object.keys(data).length;
    let loop_count = 0
    let json_count = product_count

    console.log(data)

    return (
        <>
            {data.map(() => {
                if (json_count >= 3) {
                    loop_count += 3
                    json_count -= 3

                    return (
                        <div className='row justify-content-center'>
                            <div className='col-2' id='col_mainproducts'>
                                <ProfileCard id={data[loop_count - 3].id} name={data[loop_count - 3].name} position={data[loop_count - 3].position} avatar={data[loop_count - 3].avatar} personxskill={data[loop_count - 3].personxskill} />
                            </div>
                            <div className='col-2' id='col_mainproducts'>
                                <ProfileCard id={data[loop_count - 2].id} name={data[loop_count - 2].name} position={data[loop_count - 2].position} avatar={data[loop_count - 2].avatar } personxskill={data[loop_count - 2].personxskill}/>

                            </div>
                            <div className='col-2' id='col_mainproducts'>
                                <ProfileCard id={data[loop_count - 1].id} name={data[loop_count - 1].name} position={data[loop_count - 1].position} avatar={data[loop_count - 1].avatar} personxskill={data[loop_count - 1].personxskill}/>

                            </div>
                        </div>
                    )
                } else if (json_count == 2) {
                    loop_count += 2
                    json_count -= 2

                    return (
                        <div className='row justify-content-center'>
                            <div className='col-2' id='col_mainproducts'>
                                <ProfileCard id={data[loop_count - 2].id} name={data[loop_count - 2].name} position={data[loop_count - 2].position} avatar={data[loop_count - 2].avatar} personxskill={data[loop_count - 2].personxskill}/>
                            </div>
                            <div className='col-2' id='col_mainproducts'>
                                <ProfileCard id={data[loop_count - 1].id} name={data[loop_count - 1].name} position={data[loop_count - 1].position} avatar={data[loop_count - 1].avatar} personxskill={data[loop_count - 1].personxskill}/>
                            </div>
                            <div className='col-2' id='col_mainproducts'>
                                <input type="hidden" />
                            </div>
                        </div>
                    )
                } else if (json_count == 1) {
                    loop_count += 1
                    json_count -= 1

                    return (
                        <div className='row justify-content-center'>
                            <div className='col-2' id='col_mainproducts'>
                                <ProfileCard id={data[loop_count - 1].id} name={data[loop_count - 1].name} position={data[loop_count - 1].position} avatar={data[loop_count - 1].avatar} personxskill={data[loop_count - 1].personxskill}/>
                            </div>
                            <div className='col-2' id='col_mainproducts'>
                                <input type="hidden" />
                            </div>
                            <div className='col-2' id='col_mainproducts'>
                                <input type="hidden" />
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default CardCreator