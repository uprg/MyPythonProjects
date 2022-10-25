http_request = """

GET /  HTTP/1.1
HOST: localhost:8000


"""


def parse_http_request(http_request):
    request_object = {}
    no_spaces = http_request.strip()
    http_elements = no_spaces.split("\n")
    for i in range(len(http_elements)):
        if i == 0:
            request_object["request_method"] = http_elements[i].split(" ")[0]
            request_object["request_path"] = http_elements[i].split(" ")[1]
            request_object["request_protocol"] = http_elements[i].split(" ")[3].split("/")[0]
            request_object["request_protocol_version"] = http_elements[i].split(" ")[3].split("/")[1]
        
        if i == 1:
            request_object["request_host"] = http_elements[i].split(" ")[1]
    
    return request_object

print(parse_http_request(http_request))