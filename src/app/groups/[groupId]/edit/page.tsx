import { EditGroup } from '@/app/groups/[groupId]/edit/edit-group'
import { getRuntimeFeatureFlags } from '@/lib/featureFlags'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings',
}

export default async function EditGroupPage({
  params: { groupId },
}: {
  params: { groupId: string }
}) {
  return (
    <EditGroup
      groupId={groupId}
      runtimeFeatureFlags={await getRuntimeFeatureFlags()}
    />
  )
}
