import { UseFormReturn } from 'react-hook-form'
import { useMutation as RQMutation } from '@tanstack/react-query'
import { MutationFnVariables } from '@types'
import Utils from '@utils'
import { useTranslations } from 'next-intl'
import { useSnackbar } from 'notistack'

export default function useMutation(options?: Partial<UseFormReturn<any>>) {
  const { enqueueSnackbar } = useSnackbar()
  const t = useTranslations()

  const result = RQMutation<any, any, MutationFnVariables, any>({
    onError: (error, variables) => {
      if (variables?.disableParentOnError) return

      const errorCode = error?.response?.data?.error?.code

      if (!errorCode) {
        if (variables?.errorMessage) {
          enqueueSnackbar(variables.errorMessage, { variant: 'error' })
        }
        return
      }

      const setError = options?.setError

      if (!setError) {
        const { toastTranslationKey, toastTranslationValues } =
          Utils.getToastError(errorCode, variables.data)

        if (toastTranslationKey) {
          enqueueSnackbar(t(toastTranslationKey, toastTranslationValues), {
            variant: 'error'
          })
        }
        return
      }

      const {
        fieldNames,
        validationTranslationKey,
        validationTranslationValues
      } = Utils.getValidationError(errorCode, variables.data)

      if (fieldNames?.length) {
        fieldNames.forEach((field) => {
          setError(field, {
            type: 'manual',
            message: t(validationTranslationKey, validationTranslationValues)
          })
        })

        if (options?.setFocus) {
          options.setFocus(fieldNames[0])
        }
        return
      }

      const { toastTranslationKey, toastTranslationValues } =
        Utils.getToastError(errorCode, variables.data)

      if (toastTranslationKey) {
        enqueueSnackbar(t(toastTranslationKey, toastTranslationValues), {
          variant: 'error'
        })
      }
    }
  })

  return result
}
