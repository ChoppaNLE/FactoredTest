import { color } from '@mui/system'
import {Link} from 'react-router-dom'

function Bar() {
    return (
        <div className='container-fluid' id="container_bar">
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <a href="https://factored.ai">
                        <img width="200" height="70" src="https://factored.ai/wp-content/uploads/2020/11/Recurso-13.png" class="attachment-full size-full wp-image-399" alt="" loading="lazy" srcset="https://factored.ai/wp-content/uploads/2020/11/Recurso-13.png 644w, https://factored.ai/wp-content/uploads/2020/11/Recurso-13-300x106.png 300w, https://factored.ai/wp-content/uploads/2020/11/Recurso-13-282x100.png 282w, https://factored.ai/wp-content/uploads/2020/11/Recurso-13-226x80.png 226w, https://factored.ai/wp-content/uploads/2020/11/Recurso-13-394x139.png 394w" sizes="(max-width: 644px) 100vw, 644px" />
                    </a>
                </div>
                <div className='col-1 use my-auto'>
                    <div class="elementor-item elementor-item-active ">
                        <Link to='/' id='link' style={{textDecoration: 'none'}}>
                            HOME
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bar