'use client'
import { RuntimeFeatureFlags } from '@/lib/featureFlags'
import { GroupForm } from '@/components/group-form'
import { trpc } from '@/trpc/client'
import { useRouter } from 'next/navigation'

export const CreateGroup = ({
  runtimeFeatureFlags,
}: {
  runtimeFeatureFlags: RuntimeFeatureFlags
}) => {
  const { mutateAsync } = trpc.groups.create.useMutation()
  const utils = trpc.useUtils()
  const router = useRouter()

  return (
    <GroupForm
      onSubmit={async (groupFormValues) => {
        const { groupId } = await mutateAsync({ groupFormValues })
        await utils.groups.invalidate()
        router.push(`/groups/${groupId}`)
      }}
      runtimeFeatureFlags={runtimeFeatureFlags}
    />
  )
}