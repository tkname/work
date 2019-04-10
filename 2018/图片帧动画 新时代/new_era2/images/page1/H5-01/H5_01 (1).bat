@ECHO OFF&SetLocal ENABLEDELAYEDEXPANSION 
::设置 数字变量
::set：设置 
::local：本地（环境变量） 
::enable：能够 
::delayed：延迟 
::expansion：扩展 
::setlocal enabledelayedexpansion就是扩展本地环境变量延迟，

::echo %1
::查看是否有此文件
::IF EXIST %1     echo %1 找到   
::IF NOT EXIST %1 ECHO %1 没找到

::type %1
::type %2

set ss=0
for %%c in (*.jpg) do (
   set "name=%%c"
   set "name=!name: (=!"
   set "name=!name:)=!"
   set  /a ss=ss+1 ::转数字可以运算 /a
   echo !ss!
   ren "%%c" "!name!" 
)

::set str2=0
::for  %%i in (*.txt) do ( 
::set "str=%%i" 
::set  /a str2=str2+1
::echo !str! !str2!
::) 
