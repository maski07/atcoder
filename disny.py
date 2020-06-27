import urllib.request
import ssl

from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

DRIVER_PATH = '{{""}}'
driver = webdriver.Chrome(executable_path=DRIVER_PATH, chrome_options=options)
url = '{{ クローリング/スクレイピングするURL }}'
driver.get(url)

"""
chrome_options = webdriver.ChromeOptions()
prefs = {"profile.default_content_setting_values.notifications" : 2}
chrome_options.add_experimental_option("prefs",prefs)

# エミュレーション利用時はこちらをコメントアウト
# mobile_emulation = { "deviceName": "Nexus 7" }
# chrome_options.add_experimental_option("mobileEmulation", mobile_emulation)

# こちらでLogTypeとか設定します。
# https://github.com/SeleniumHQ/selenium/wiki/Logging
caps = DesiredCapabilities.CHROME
caps['loggingPrefs'] = {'browser': 'SEVERE'}

driver = webdriver.Chrome(chrome_options=chrome_options, desired_capabilities=caps)

# HTTPS対応
ssl._create_default_https_context = ssl._create_unverified_context

# ここにチェックしたいURLを記載してください。
urls = [
    'https://www.google.co.jp/'
]

for url in urls:
    # レスポンスコードを取得
    req = urllib.request.Request(url)
    try:
        urllib.request.urlopen(req)
    except urllib.error.HTTPError as e:
        print(url, 'HTTP Response Error', e.code)
        continue

    # JSエラーを取得
    driver.get(url)
    for entry in driver.get_log('browser'):
        print(url, entry['message'])


driver.close()
"""