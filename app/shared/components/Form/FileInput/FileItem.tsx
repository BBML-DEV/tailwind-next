import { formatBytes } from '@/app/shared/utils/format-bytes'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import React from 'react'
import { useFileInput } from './Root'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:bg-violet-300 dark:border-violet-700/10',
  },
  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container: 'border-violet-500 dark:bg-zinc-800 dark:text-zinc-100',
      },
      error: {
        container:
          'bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30',
        icon: 'border-error-50 bg-error-100 text-error-600 dark:bg-error-500/5 dark:border-error-500/30',
      },
    },
    defaultVariants: {
      state: 'progress',
    },
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export const FileItem = ({ name, size, state }: FileItemProps) => {
  const { deleteFiles } = useFileInput()

  const { container, icon } = fileItem({ state })

  function handleDelete(name: string) {
    deleteFiles(name)
  }
  return (
    <div key={name} className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-red-700">
              Upload failed, please try again.
            </span>
            <span className="text-sm text-red-600">{name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900"
          >
            {' '}
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {formatBytes(size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-sm font-medium">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 rounded fill-violet-600 text-white" />
      ) : (
        <button
          type="button"
          className="rounded-md p-2 hover:bg-zinc-50 dark:hover:bg-transparent"
          onClick={() => handleDelete(name)}
        >
          <Trash2 className="h-5 w-5 text-zinc-500 hover:text-red-600" />
        </button>
      )}
    </div>
  )
}
