import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { closeSnackbar, SnackbarKey } from 'notistack'

type Props = {
  snackbarKey: SnackbarKey
}

export default function SnackbarCloseButton({ snackbarKey }: Props) {
  return (
    <IconButton
      size="small"
      sx={{ color: 'primary.contrastText' }}
      onClick={() => closeSnackbar(snackbarKey)}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  )
}
