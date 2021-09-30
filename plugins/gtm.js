const tagManagerId = process.env.GOOGLE_TAG_MANAGER_ID

export default function({ $gtm, route }) {
  $gtm.init(tagManagerId)
}