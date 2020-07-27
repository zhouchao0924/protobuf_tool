set PROTO_PATH=.\Protocol
set STEP1_PROTO2CPP_PATH=.\step1_proto2cpp
​
cd %STEP1_PROTO2CPP_PATH%
​
dir ..\%PROTO_PATH%\*.proto /b  > protolist.txt
​
for /f "delims=." %%i in (protolist.txt) do protoc --cpp_out=. --proto_path=..\%PROTO_PATH% ..\%PROTO_PATH%\%%i.proto 