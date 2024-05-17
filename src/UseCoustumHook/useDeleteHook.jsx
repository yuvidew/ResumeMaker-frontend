import axios from 'axios'
import { enqueueSnackbar } from 'notistack';

const useDeleteHook = () => {

  const deleteResume = async (url) => {
    try {
      const res = await axios.delete(url)
      if(res.data){
        enqueueSnackbar('letter is successfully deleted |', { variant: 'success' });
        window.location.reload()
      }
    } catch (error) {
      enqueueSnackbar('Something  |', { variant: 'error' });
    }
  }
  return [deleteResume]
}

export default useDeleteHook