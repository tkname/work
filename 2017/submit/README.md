工欲善其事，必先利其器

submit下载地址：http://www.sublimetext.com/

快捷键： Ctrl+P：收索 Ctrl+Shift+P：控制面板 Ctrl + D：选择多个

插件安装： 

1.打开Sublime的控制台 Ctrl + ` 打开控制台 view->Hide Console 

2. 输入以下命令 import urllib.request,os,hashlib; h = 'df21e130d211cfc94d9b0905775a7c0f' + '1e3d39e33b79698005270310898eea76'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

3. 使用Package Control安装插件 Ctrl + Shift + P，打开命令面板 

4.安装包 install Package 进入插件安装包 4.1 Emment （css选择器生成html 提示/快捷键） emment的前身是zen coding 具体使用：http://www.w3cplus.com/tools/emmet-cheat-sheet.html meta:vp：生成移动端meta标签

4.2 BracketHighlighter (匹配括号，高亮显示)

4.3 Chinese?Localization（汉化插件）

4.4 DocBlockr（自动生成注释块）

4.5 SublimeLinter（代码校验）

4.6 AutoFileName（补全src、href文件路径）

20个插件：https://www.oschina.net/translate/20-powerful-sublimetext-plugins

快捷键使用/新建文件夹:https://www.douban.com/note/276794943/