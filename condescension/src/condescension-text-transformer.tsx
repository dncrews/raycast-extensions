import { Clipboard, Toast, getSelectedText, showHUD, showToast } from "@raycast/api"
import { sarcasmTransformer } from "./sarcasmTransformer"

export default async function Command () {
  try {
    const selectedText = await getSelectedText()
    const transformedText = sarcasmTransformer(selectedText)
    await Clipboard.paste(transformedText)
    await showHUD('tExT TrAnSfOrMeD')
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: 'cAnNoT TrAnSfOrM TeXt',
      message: String(error),
    })
  }
}