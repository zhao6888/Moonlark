from nonebot import require
from nonebot.plugin import PluginMetadata


__plugin_meta__ = PluginMetadata(
    name="nonebot-plugin-items",
    description="",
    usage="",
)

require("nonebot_plugin_larklang")
require("nonebot_plugin_item")


from . import items
