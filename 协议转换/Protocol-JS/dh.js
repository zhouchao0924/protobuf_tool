/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Process = (function() {

    /**
     * Constructs a new Process service.
     * @exports Process
     * @classdesc Represents a Process
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Process(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Process.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Process;

    /**
     * Creates new Process service using the specified rpc implementation.
     * @function create
     * @memberof Process
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Process} RPC service. Useful where requests and/or responses are streamed.
     */
    Process.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Process#process3d}.
     * @memberof Process
     * @typedef Process3dCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Process3dReply} [response] Process3dReply
     */

    /**
     * Calls Process3d.
     * @function process3d
     * @memberof Process
     * @instance
     * @param {IProcess3dRequest} request Process3dRequest message or plain object
     * @param {Process.Process3dCallback} callback Node-style callback called with the error, if any, and Process3dReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Process.prototype.process3d = function process3d(request, callback) {
        return this.rpcCall(process3d, $root.Process3dRequest, $root.Process3dReply, request, callback);
    }, "name", { value: "Process3d" });

    /**
     * Calls Process3d.
     * @function process3d
     * @memberof Process
     * @instance
     * @param {IProcess3dRequest} request Process3dRequest message or plain object
     * @returns {Promise<Process3dReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Process#process3dOnedim}.
     * @memberof Process
     * @typedef Process3dOnedimCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Process3dReplyOnedim} [response] Process3dReplyOnedim
     */

    /**
     * Calls Process3dOnedim.
     * @function process3dOnedim
     * @memberof Process
     * @instance
     * @param {IProcess3dRequest} request Process3dRequest message or plain object
     * @param {Process.Process3dOnedimCallback} callback Node-style callback called with the error, if any, and Process3dReplyOnedim
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Process.prototype.process3dOnedim = function process3dOnedim(request, callback) {
        return this.rpcCall(process3dOnedim, $root.Process3dRequest, $root.Process3dReplyOnedim, request, callback);
    }, "name", { value: "Process3dOnedim" });

    /**
     * Calls Process3dOnedim.
     * @function process3dOnedim
     * @memberof Process
     * @instance
     * @param {IProcess3dRequest} request Process3dRequest message or plain object
     * @returns {Promise<Process3dReplyOnedim>} Promise
     * @variation 2
     */

    return Process;
})();

$root.Process3dRequest = (function() {

    /**
     * Properties of a Process3dRequest.
     * @exports IProcess3dRequest
     * @interface IProcess3dRequest
     * @property {number|null} [sampleRate] Process3dRequest sampleRate
     * @property {Uint8Array|null} [wav] Process3dRequest wav
     * @property {number|null} [ratio] Process3dRequest ratio
     */

    /**
     * Constructs a new Process3dRequest.
     * @exports Process3dRequest
     * @classdesc Represents a Process3dRequest.
     * @implements IProcess3dRequest
     * @constructor
     * @param {IProcess3dRequest=} [properties] Properties to set
     */
    function Process3dRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Process3dRequest sampleRate.
     * @member {number} sampleRate
     * @memberof Process3dRequest
     * @instance
     */
    Process3dRequest.prototype.sampleRate = 0;

    /**
     * Process3dRequest wav.
     * @member {Uint8Array} wav
     * @memberof Process3dRequest
     * @instance
     */
    Process3dRequest.prototype.wav = $util.newBuffer([]);

    /**
     * Process3dRequest ratio.
     * @member {number} ratio
     * @memberof Process3dRequest
     * @instance
     */
    Process3dRequest.prototype.ratio = 0;

    /**
     * Creates a new Process3dRequest instance using the specified properties.
     * @function create
     * @memberof Process3dRequest
     * @static
     * @param {IProcess3dRequest=} [properties] Properties to set
     * @returns {Process3dRequest} Process3dRequest instance
     */
    Process3dRequest.create = function create(properties) {
        return new Process3dRequest(properties);
    };

    /**
     * Encodes the specified Process3dRequest message. Does not implicitly {@link Process3dRequest.verify|verify} messages.
     * @function encode
     * @memberof Process3dRequest
     * @static
     * @param {IProcess3dRequest} message Process3dRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Process3dRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sampleRate != null && Object.hasOwnProperty.call(message, "sampleRate"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sampleRate);
        if (message.wav != null && Object.hasOwnProperty.call(message, "wav"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.wav);
        if (message.ratio != null && Object.hasOwnProperty.call(message, "ratio"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.ratio);
        return writer;
    };

    /**
     * Encodes the specified Process3dRequest message, length delimited. Does not implicitly {@link Process3dRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Process3dRequest
     * @static
     * @param {IProcess3dRequest} message Process3dRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Process3dRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Process3dRequest message from the specified reader or buffer.
     * @function decode
     * @memberof Process3dRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Process3dRequest} Process3dRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Process3dRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Process3dRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sampleRate = reader.int32();
                break;
            case 2:
                message.wav = reader.bytes();
                break;
            case 3:
                message.ratio = reader.float();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Process3dRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Process3dRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Process3dRequest} Process3dRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Process3dRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Process3dRequest message.
     * @function verify
     * @memberof Process3dRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Process3dRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
            if (!$util.isInteger(message.sampleRate))
                return "sampleRate: integer expected";
        if (message.wav != null && message.hasOwnProperty("wav"))
            if (!(message.wav && typeof message.wav.length === "number" || $util.isString(message.wav)))
                return "wav: buffer expected";
        if (message.ratio != null && message.hasOwnProperty("ratio"))
            if (typeof message.ratio !== "number")
                return "ratio: number expected";
        return null;
    };

    /**
     * Creates a Process3dRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Process3dRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Process3dRequest} Process3dRequest
     */
    Process3dRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.Process3dRequest)
            return object;
        var message = new $root.Process3dRequest();
        if (object.sampleRate != null)
            message.sampleRate = object.sampleRate | 0;
        if (object.wav != null)
            if (typeof object.wav === "string")
                $util.base64.decode(object.wav, message.wav = $util.newBuffer($util.base64.length(object.wav)), 0);
            else if (object.wav.length)
                message.wav = object.wav;
        if (object.ratio != null)
            message.ratio = Number(object.ratio);
        return message;
    };

    /**
     * Creates a plain object from a Process3dRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Process3dRequest
     * @static
     * @param {Process3dRequest} message Process3dRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Process3dRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.sampleRate = 0;
            if (options.bytes === String)
                object.wav = "";
            else {
                object.wav = [];
                if (options.bytes !== Array)
                    object.wav = $util.newBuffer(object.wav);
            }
            object.ratio = 0;
        }
        if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
            object.sampleRate = message.sampleRate;
        if (message.wav != null && message.hasOwnProperty("wav"))
            object.wav = options.bytes === String ? $util.base64.encode(message.wav, 0, message.wav.length) : options.bytes === Array ? Array.prototype.slice.call(message.wav) : message.wav;
        if (message.ratio != null && message.hasOwnProperty("ratio"))
            object.ratio = options.json && !isFinite(message.ratio) ? String(message.ratio) : message.ratio;
        return object;
    };

    /**
     * Converts this Process3dRequest to JSON.
     * @function toJSON
     * @memberof Process3dRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Process3dRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Process3dRequest;
})();

$root.Point3D = (function() {

    /**
     * Properties of a Point3D.
     * @exports IPoint3D
     * @interface IPoint3D
     * @property {number|null} [x] Point3D x
     * @property {number|null} [y] Point3D y
     * @property {number|null} [z] Point3D z
     */

    /**
     * Constructs a new Point3D.
     * @exports Point3D
     * @classdesc Represents a Point3D.
     * @implements IPoint3D
     * @constructor
     * @param {IPoint3D=} [properties] Properties to set
     */
    function Point3D(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Point3D x.
     * @member {number} x
     * @memberof Point3D
     * @instance
     */
    Point3D.prototype.x = 0;

    /**
     * Point3D y.
     * @member {number} y
     * @memberof Point3D
     * @instance
     */
    Point3D.prototype.y = 0;

    /**
     * Point3D z.
     * @member {number} z
     * @memberof Point3D
     * @instance
     */
    Point3D.prototype.z = 0;

    /**
     * Creates a new Point3D instance using the specified properties.
     * @function create
     * @memberof Point3D
     * @static
     * @param {IPoint3D=} [properties] Properties to set
     * @returns {Point3D} Point3D instance
     */
    Point3D.create = function create(properties) {
        return new Point3D(properties);
    };

    /**
     * Encodes the specified Point3D message. Does not implicitly {@link Point3D.verify|verify} messages.
     * @function encode
     * @memberof Point3D
     * @static
     * @param {IPoint3D} message Point3D message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Point3D.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
        if (message.z != null && Object.hasOwnProperty.call(message, "z"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
        return writer;
    };

    /**
     * Encodes the specified Point3D message, length delimited. Does not implicitly {@link Point3D.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Point3D
     * @static
     * @param {IPoint3D} message Point3D message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Point3D.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Point3D message from the specified reader or buffer.
     * @function decode
     * @memberof Point3D
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Point3D} Point3D
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Point3D.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Point3D();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.x = reader.float();
                break;
            case 2:
                message.y = reader.float();
                break;
            case 3:
                message.z = reader.float();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Point3D message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Point3D
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Point3D} Point3D
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Point3D.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Point3D message.
     * @function verify
     * @memberof Point3D
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Point3D.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        if (message.z != null && message.hasOwnProperty("z"))
            if (typeof message.z !== "number")
                return "z: number expected";
        return null;
    };

    /**
     * Creates a Point3D message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Point3D
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Point3D} Point3D
     */
    Point3D.fromObject = function fromObject(object) {
        if (object instanceof $root.Point3D)
            return object;
        var message = new $root.Point3D();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        if (object.z != null)
            message.z = Number(object.z);
        return message;
    };

    /**
     * Creates a plain object from a Point3D message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Point3D
     * @static
     * @param {Point3D} message Point3D
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Point3D.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
            object.z = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        if (message.z != null && message.hasOwnProperty("z"))
            object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
        return object;
    };

    /**
     * Converts this Point3D to JSON.
     * @function toJSON
     * @memberof Point3D
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Point3D.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Point3D;
})();

$root.Point3Ds = (function() {

    /**
     * Properties of a Point3Ds.
     * @exports IPoint3Ds
     * @interface IPoint3Ds
     * @property {Array.<IPoint3D>|null} [points] Point3Ds points
     */

    /**
     * Constructs a new Point3Ds.
     * @exports Point3Ds
     * @classdesc Represents a Point3Ds.
     * @implements IPoint3Ds
     * @constructor
     * @param {IPoint3Ds=} [properties] Properties to set
     */
    function Point3Ds(properties) {
        this.points = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Point3Ds points.
     * @member {Array.<IPoint3D>} points
     * @memberof Point3Ds
     * @instance
     */
    Point3Ds.prototype.points = $util.emptyArray;

    /**
     * Creates a new Point3Ds instance using the specified properties.
     * @function create
     * @memberof Point3Ds
     * @static
     * @param {IPoint3Ds=} [properties] Properties to set
     * @returns {Point3Ds} Point3Ds instance
     */
    Point3Ds.create = function create(properties) {
        return new Point3Ds(properties);
    };

    /**
     * Encodes the specified Point3Ds message. Does not implicitly {@link Point3Ds.verify|verify} messages.
     * @function encode
     * @memberof Point3Ds
     * @static
     * @param {IPoint3Ds} message Point3Ds message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Point3Ds.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.points != null && message.points.length)
            for (var i = 0; i < message.points.length; ++i)
                $root.Point3D.encode(message.points[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Point3Ds message, length delimited. Does not implicitly {@link Point3Ds.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Point3Ds
     * @static
     * @param {IPoint3Ds} message Point3Ds message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Point3Ds.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Point3Ds message from the specified reader or buffer.
     * @function decode
     * @memberof Point3Ds
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Point3Ds} Point3Ds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Point3Ds.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Point3Ds();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.points && message.points.length))
                    message.points = [];
                message.points.push($root.Point3D.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Point3Ds message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Point3Ds
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Point3Ds} Point3Ds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Point3Ds.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Point3Ds message.
     * @function verify
     * @memberof Point3Ds
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Point3Ds.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.points != null && message.hasOwnProperty("points")) {
            if (!Array.isArray(message.points))
                return "points: array expected";
            for (var i = 0; i < message.points.length; ++i) {
                var error = $root.Point3D.verify(message.points[i]);
                if (error)
                    return "points." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Point3Ds message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Point3Ds
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Point3Ds} Point3Ds
     */
    Point3Ds.fromObject = function fromObject(object) {
        if (object instanceof $root.Point3Ds)
            return object;
        var message = new $root.Point3Ds();
        if (object.points) {
            if (!Array.isArray(object.points))
                throw TypeError(".Point3Ds.points: array expected");
            message.points = [];
            for (var i = 0; i < object.points.length; ++i) {
                if (typeof object.points[i] !== "object")
                    throw TypeError(".Point3Ds.points: object expected");
                message.points[i] = $root.Point3D.fromObject(object.points[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Point3Ds message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Point3Ds
     * @static
     * @param {Point3Ds} message Point3Ds
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Point3Ds.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.points = [];
        if (message.points && message.points.length) {
            object.points = [];
            for (var j = 0; j < message.points.length; ++j)
                object.points[j] = $root.Point3D.toObject(message.points[j], options);
        }
        return object;
    };

    /**
     * Converts this Point3Ds to JSON.
     * @function toJSON
     * @memberof Point3Ds
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Point3Ds.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Point3Ds;
})();

$root.Point3Dss = (function() {

    /**
     * Properties of a Point3Dss.
     * @exports IPoint3Dss
     * @interface IPoint3Dss
     * @property {Array.<IPoint3Ds>|null} [points] Point3Dss points
     */

    /**
     * Constructs a new Point3Dss.
     * @exports Point3Dss
     * @classdesc Represents a Point3Dss.
     * @implements IPoint3Dss
     * @constructor
     * @param {IPoint3Dss=} [properties] Properties to set
     */
    function Point3Dss(properties) {
        this.points = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Point3Dss points.
     * @member {Array.<IPoint3Ds>} points
     * @memberof Point3Dss
     * @instance
     */
    Point3Dss.prototype.points = $util.emptyArray;

    /**
     * Creates a new Point3Dss instance using the specified properties.
     * @function create
     * @memberof Point3Dss
     * @static
     * @param {IPoint3Dss=} [properties] Properties to set
     * @returns {Point3Dss} Point3Dss instance
     */
    Point3Dss.create = function create(properties) {
        return new Point3Dss(properties);
    };

    /**
     * Encodes the specified Point3Dss message. Does not implicitly {@link Point3Dss.verify|verify} messages.
     * @function encode
     * @memberof Point3Dss
     * @static
     * @param {IPoint3Dss} message Point3Dss message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Point3Dss.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.points != null && message.points.length)
            for (var i = 0; i < message.points.length; ++i)
                $root.Point3Ds.encode(message.points[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Point3Dss message, length delimited. Does not implicitly {@link Point3Dss.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Point3Dss
     * @static
     * @param {IPoint3Dss} message Point3Dss message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Point3Dss.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Point3Dss message from the specified reader or buffer.
     * @function decode
     * @memberof Point3Dss
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Point3Dss} Point3Dss
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Point3Dss.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Point3Dss();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.points && message.points.length))
                    message.points = [];
                message.points.push($root.Point3Ds.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Point3Dss message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Point3Dss
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Point3Dss} Point3Dss
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Point3Dss.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Point3Dss message.
     * @function verify
     * @memberof Point3Dss
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Point3Dss.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.points != null && message.hasOwnProperty("points")) {
            if (!Array.isArray(message.points))
                return "points: array expected";
            for (var i = 0; i < message.points.length; ++i) {
                var error = $root.Point3Ds.verify(message.points[i]);
                if (error)
                    return "points." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Point3Dss message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Point3Dss
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Point3Dss} Point3Dss
     */
    Point3Dss.fromObject = function fromObject(object) {
        if (object instanceof $root.Point3Dss)
            return object;
        var message = new $root.Point3Dss();
        if (object.points) {
            if (!Array.isArray(object.points))
                throw TypeError(".Point3Dss.points: array expected");
            message.points = [];
            for (var i = 0; i < object.points.length; ++i) {
                if (typeof object.points[i] !== "object")
                    throw TypeError(".Point3Dss.points: object expected");
                message.points[i] = $root.Point3Ds.fromObject(object.points[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Point3Dss message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Point3Dss
     * @static
     * @param {Point3Dss} message Point3Dss
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Point3Dss.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.points = [];
        if (message.points && message.points.length) {
            object.points = [];
            for (var j = 0; j < message.points.length; ++j)
                object.points[j] = $root.Point3Ds.toObject(message.points[j], options);
        }
        return object;
    };

    /**
     * Converts this Point3Dss to JSON.
     * @function toJSON
     * @memberof Point3Dss
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Point3Dss.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Point3Dss;
})();

$root.Process3dReply = (function() {

    /**
     * Properties of a Process3dReply.
     * @exports IProcess3dReply
     * @interface IProcess3dReply
     * @property {number|null} [code] Process3dReply code
     * @property {Array.<number>|null} [indPoints] Process3dReply indPoints
     * @property {Array.<IPoint3Dss>|null} [points] Process3dReply points
     */

    /**
     * Constructs a new Process3dReply.
     * @exports Process3dReply
     * @classdesc Represents a Process3dReply.
     * @implements IProcess3dReply
     * @constructor
     * @param {IProcess3dReply=} [properties] Properties to set
     */
    function Process3dReply(properties) {
        this.indPoints = [];
        this.points = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Process3dReply code.
     * @member {number} code
     * @memberof Process3dReply
     * @instance
     */
    Process3dReply.prototype.code = 0;

    /**
     * Process3dReply indPoints.
     * @member {Array.<number>} indPoints
     * @memberof Process3dReply
     * @instance
     */
    Process3dReply.prototype.indPoints = $util.emptyArray;

    /**
     * Process3dReply points.
     * @member {Array.<IPoint3Dss>} points
     * @memberof Process3dReply
     * @instance
     */
    Process3dReply.prototype.points = $util.emptyArray;

    /**
     * Creates a new Process3dReply instance using the specified properties.
     * @function create
     * @memberof Process3dReply
     * @static
     * @param {IProcess3dReply=} [properties] Properties to set
     * @returns {Process3dReply} Process3dReply instance
     */
    Process3dReply.create = function create(properties) {
        return new Process3dReply(properties);
    };

    /**
     * Encodes the specified Process3dReply message. Does not implicitly {@link Process3dReply.verify|verify} messages.
     * @function encode
     * @memberof Process3dReply
     * @static
     * @param {IProcess3dReply} message Process3dReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Process3dReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.indPoints != null && message.indPoints.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.indPoints.length; ++i)
                writer.int32(message.indPoints[i]);
            writer.ldelim();
        }
        if (message.points != null && message.points.length)
            for (var i = 0; i < message.points.length; ++i)
                $root.Point3Dss.encode(message.points[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Process3dReply message, length delimited. Does not implicitly {@link Process3dReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Process3dReply
     * @static
     * @param {IProcess3dReply} message Process3dReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Process3dReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Process3dReply message from the specified reader or buffer.
     * @function decode
     * @memberof Process3dReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Process3dReply} Process3dReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Process3dReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Process3dReply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.code = reader.int32();
                break;
            case 2:
                if (!(message.indPoints && message.indPoints.length))
                    message.indPoints = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.indPoints.push(reader.int32());
                } else
                    message.indPoints.push(reader.int32());
                break;
            case 3:
                if (!(message.points && message.points.length))
                    message.points = [];
                message.points.push($root.Point3Dss.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Process3dReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Process3dReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Process3dReply} Process3dReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Process3dReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Process3dReply message.
     * @function verify
     * @memberof Process3dReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Process3dReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        if (message.indPoints != null && message.hasOwnProperty("indPoints")) {
            if (!Array.isArray(message.indPoints))
                return "indPoints: array expected";
            for (var i = 0; i < message.indPoints.length; ++i)
                if (!$util.isInteger(message.indPoints[i]))
                    return "indPoints: integer[] expected";
        }
        if (message.points != null && message.hasOwnProperty("points")) {
            if (!Array.isArray(message.points))
                return "points: array expected";
            for (var i = 0; i < message.points.length; ++i) {
                var error = $root.Point3Dss.verify(message.points[i]);
                if (error)
                    return "points." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Process3dReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Process3dReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Process3dReply} Process3dReply
     */
    Process3dReply.fromObject = function fromObject(object) {
        if (object instanceof $root.Process3dReply)
            return object;
        var message = new $root.Process3dReply();
        if (object.code != null)
            message.code = object.code | 0;
        if (object.indPoints) {
            if (!Array.isArray(object.indPoints))
                throw TypeError(".Process3dReply.indPoints: array expected");
            message.indPoints = [];
            for (var i = 0; i < object.indPoints.length; ++i)
                message.indPoints[i] = object.indPoints[i] | 0;
        }
        if (object.points) {
            if (!Array.isArray(object.points))
                throw TypeError(".Process3dReply.points: array expected");
            message.points = [];
            for (var i = 0; i < object.points.length; ++i) {
                if (typeof object.points[i] !== "object")
                    throw TypeError(".Process3dReply.points: object expected");
                message.points[i] = $root.Point3Dss.fromObject(object.points[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Process3dReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Process3dReply
     * @static
     * @param {Process3dReply} message Process3dReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Process3dReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.indPoints = [];
            object.points = [];
        }
        if (options.defaults)
            object.code = 0;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.indPoints && message.indPoints.length) {
            object.indPoints = [];
            for (var j = 0; j < message.indPoints.length; ++j)
                object.indPoints[j] = message.indPoints[j];
        }
        if (message.points && message.points.length) {
            object.points = [];
            for (var j = 0; j < message.points.length; ++j)
                object.points[j] = $root.Point3Dss.toObject(message.points[j], options);
        }
        return object;
    };

    /**
     * Converts this Process3dReply to JSON.
     * @function toJSON
     * @memberof Process3dReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Process3dReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Process3dReply;
})();

$root.Animation = (function() {

    /**
     * Properties of an Animation.
     * @exports IAnimation
     * @interface IAnimation
     * @property {number|null} [time] Animation time
     * @property {string|null} [name] Animation name
     */

    /**
     * Constructs a new Animation.
     * @exports Animation
     * @classdesc Represents an Animation.
     * @implements IAnimation
     * @constructor
     * @param {IAnimation=} [properties] Properties to set
     */
    function Animation(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Animation time.
     * @member {number} time
     * @memberof Animation
     * @instance
     */
    Animation.prototype.time = 0;

    /**
     * Animation name.
     * @member {string} name
     * @memberof Animation
     * @instance
     */
    Animation.prototype.name = "";

    /**
     * Creates a new Animation instance using the specified properties.
     * @function create
     * @memberof Animation
     * @static
     * @param {IAnimation=} [properties] Properties to set
     * @returns {Animation} Animation instance
     */
    Animation.create = function create(properties) {
        return new Animation(properties);
    };

    /**
     * Encodes the specified Animation message. Does not implicitly {@link Animation.verify|verify} messages.
     * @function encode
     * @memberof Animation
     * @static
     * @param {IAnimation} message Animation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Animation.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.time);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified Animation message, length delimited. Does not implicitly {@link Animation.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Animation
     * @static
     * @param {IAnimation} message Animation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Animation.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Animation message from the specified reader or buffer.
     * @function decode
     * @memberof Animation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Animation} Animation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Animation.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Animation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.time = reader.float();
                break;
            case 2:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Animation message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Animation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Animation} Animation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Animation.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Animation message.
     * @function verify
     * @memberof Animation
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Animation.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time !== "number")
                return "time: number expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates an Animation message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Animation
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Animation} Animation
     */
    Animation.fromObject = function fromObject(object) {
        if (object instanceof $root.Animation)
            return object;
        var message = new $root.Animation();
        if (object.time != null)
            message.time = Number(object.time);
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from an Animation message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Animation
     * @static
     * @param {Animation} message Animation
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Animation.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.time = 0;
            object.name = "";
        }
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this Animation to JSON.
     * @function toJSON
     * @memberof Animation
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Animation.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Animation;
})();

$root.Expression = (function() {

    /**
     * Properties of an Expression.
     * @exports IExpression
     * @interface IExpression
     * @property {number|null} [time] Expression time
     * @property {string|null} [name] Expression name
     */

    /**
     * Constructs a new Expression.
     * @exports Expression
     * @classdesc Represents an Expression.
     * @implements IExpression
     * @constructor
     * @param {IExpression=} [properties] Properties to set
     */
    function Expression(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Expression time.
     * @member {number} time
     * @memberof Expression
     * @instance
     */
    Expression.prototype.time = 0;

    /**
     * Expression name.
     * @member {string} name
     * @memberof Expression
     * @instance
     */
    Expression.prototype.name = "";

    /**
     * Creates a new Expression instance using the specified properties.
     * @function create
     * @memberof Expression
     * @static
     * @param {IExpression=} [properties] Properties to set
     * @returns {Expression} Expression instance
     */
    Expression.create = function create(properties) {
        return new Expression(properties);
    };

    /**
     * Encodes the specified Expression message. Does not implicitly {@link Expression.verify|verify} messages.
     * @function encode
     * @memberof Expression
     * @static
     * @param {IExpression} message Expression message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Expression.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.time);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified Expression message, length delimited. Does not implicitly {@link Expression.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Expression
     * @static
     * @param {IExpression} message Expression message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Expression.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Expression message from the specified reader or buffer.
     * @function decode
     * @memberof Expression
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Expression} Expression
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Expression.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Expression();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.time = reader.float();
                break;
            case 2:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Expression message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Expression
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Expression} Expression
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Expression.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Expression message.
     * @function verify
     * @memberof Expression
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Expression.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time !== "number")
                return "time: number expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates an Expression message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Expression
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Expression} Expression
     */
    Expression.fromObject = function fromObject(object) {
        if (object instanceof $root.Expression)
            return object;
        var message = new $root.Expression();
        if (object.time != null)
            message.time = Number(object.time);
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from an Expression message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Expression
     * @static
     * @param {Expression} message Expression
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Expression.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.time = 0;
            object.name = "";
        }
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = options.json && !isFinite(message.time) ? String(message.time) : message.time;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this Expression to JSON.
     * @function toJSON
     * @memberof Expression
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Expression.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Expression;
})();

$root.Resolution = (function() {

    /**
     * Properties of a Resolution.
     * @exports IResolution
     * @interface IResolution
     * @property {number|null} [width] Resolution width
     * @property {number|null} [height] Resolution height
     */

    /**
     * Constructs a new Resolution.
     * @exports Resolution
     * @classdesc Represents a Resolution.
     * @implements IResolution
     * @constructor
     * @param {IResolution=} [properties] Properties to set
     */
    function Resolution(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Resolution width.
     * @member {number} width
     * @memberof Resolution
     * @instance
     */
    Resolution.prototype.width = 0;

    /**
     * Resolution height.
     * @member {number} height
     * @memberof Resolution
     * @instance
     */
    Resolution.prototype.height = 0;

    /**
     * Creates a new Resolution instance using the specified properties.
     * @function create
     * @memberof Resolution
     * @static
     * @param {IResolution=} [properties] Properties to set
     * @returns {Resolution} Resolution instance
     */
    Resolution.create = function create(properties) {
        return new Resolution(properties);
    };

    /**
     * Encodes the specified Resolution message. Does not implicitly {@link Resolution.verify|verify} messages.
     * @function encode
     * @memberof Resolution
     * @static
     * @param {IResolution} message Resolution message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Resolution.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
        return writer;
    };

    /**
     * Encodes the specified Resolution message, length delimited. Does not implicitly {@link Resolution.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Resolution
     * @static
     * @param {IResolution} message Resolution message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Resolution.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Resolution message from the specified reader or buffer.
     * @function decode
     * @memberof Resolution
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Resolution} Resolution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Resolution.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Resolution();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.width = reader.int32();
                break;
            case 2:
                message.height = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Resolution message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Resolution
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Resolution} Resolution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Resolution.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Resolution message.
     * @function verify
     * @memberof Resolution
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Resolution.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (!$util.isInteger(message.width))
                return "width: integer expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (!$util.isInteger(message.height))
                return "height: integer expected";
        return null;
    };

    /**
     * Creates a Resolution message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Resolution
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Resolution} Resolution
     */
    Resolution.fromObject = function fromObject(object) {
        if (object instanceof $root.Resolution)
            return object;
        var message = new $root.Resolution();
        if (object.width != null)
            message.width = object.width | 0;
        if (object.height != null)
            message.height = object.height | 0;
        return message;
    };

    /**
     * Creates a plain object from a Resolution message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Resolution
     * @static
     * @param {Resolution} message Resolution
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Resolution.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.width = 0;
            object.height = 0;
        }
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = message.height;
        return object;
    };

    /**
     * Converts this Resolution to JSON.
     * @function toJSON
     * @memberof Resolution
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Resolution.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Resolution;
})();

$root.Mode = (function() {

    /**
     * Properties of a Mode.
     * @exports IMode
     * @interface IMode
     * @property {string|null} [name] Mode name
     * @property {string|null} [url] Mode url
     */

    /**
     * Constructs a new Mode.
     * @exports Mode
     * @classdesc Represents a Mode.
     * @implements IMode
     * @constructor
     * @param {IMode=} [properties] Properties to set
     */
    function Mode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Mode name.
     * @member {string} name
     * @memberof Mode
     * @instance
     */
    Mode.prototype.name = "";

    /**
     * Mode url.
     * @member {string} url
     * @memberof Mode
     * @instance
     */
    Mode.prototype.url = "";

    /**
     * Creates a new Mode instance using the specified properties.
     * @function create
     * @memberof Mode
     * @static
     * @param {IMode=} [properties] Properties to set
     * @returns {Mode} Mode instance
     */
    Mode.create = function create(properties) {
        return new Mode(properties);
    };

    /**
     * Encodes the specified Mode message. Does not implicitly {@link Mode.verify|verify} messages.
     * @function encode
     * @memberof Mode
     * @static
     * @param {IMode} message Mode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Mode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
        return writer;
    };

    /**
     * Encodes the specified Mode message, length delimited. Does not implicitly {@link Mode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Mode
     * @static
     * @param {IMode} message Mode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Mode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Mode message from the specified reader or buffer.
     * @function decode
     * @memberof Mode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Mode} Mode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Mode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.url = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Mode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Mode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Mode} Mode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Mode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Mode message.
     * @function verify
     * @memberof Mode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Mode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        return null;
    };

    /**
     * Creates a Mode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Mode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Mode} Mode
     */
    Mode.fromObject = function fromObject(object) {
        if (object instanceof $root.Mode)
            return object;
        var message = new $root.Mode();
        if (object.name != null)
            message.name = String(object.name);
        if (object.url != null)
            message.url = String(object.url);
        return message;
    };

    /**
     * Creates a plain object from a Mode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Mode
     * @static
     * @param {Mode} message Mode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Mode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.url = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        return object;
    };

    /**
     * Converts this Mode to JSON.
     * @function toJSON
     * @memberof Mode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Mode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Mode;
})();

$root.BackgroundImage = (function() {

    /**
     * Properties of a BackgroundImage.
     * @exports IBackgroundImage
     * @interface IBackgroundImage
     * @property {string|null} [name] BackgroundImage name
     * @property {string|null} [url] BackgroundImage url
     */

    /**
     * Constructs a new BackgroundImage.
     * @exports BackgroundImage
     * @classdesc Represents a BackgroundImage.
     * @implements IBackgroundImage
     * @constructor
     * @param {IBackgroundImage=} [properties] Properties to set
     */
    function BackgroundImage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BackgroundImage name.
     * @member {string} name
     * @memberof BackgroundImage
     * @instance
     */
    BackgroundImage.prototype.name = "";

    /**
     * BackgroundImage url.
     * @member {string} url
     * @memberof BackgroundImage
     * @instance
     */
    BackgroundImage.prototype.url = "";

    /**
     * Creates a new BackgroundImage instance using the specified properties.
     * @function create
     * @memberof BackgroundImage
     * @static
     * @param {IBackgroundImage=} [properties] Properties to set
     * @returns {BackgroundImage} BackgroundImage instance
     */
    BackgroundImage.create = function create(properties) {
        return new BackgroundImage(properties);
    };

    /**
     * Encodes the specified BackgroundImage message. Does not implicitly {@link BackgroundImage.verify|verify} messages.
     * @function encode
     * @memberof BackgroundImage
     * @static
     * @param {IBackgroundImage} message BackgroundImage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BackgroundImage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
        return writer;
    };

    /**
     * Encodes the specified BackgroundImage message, length delimited. Does not implicitly {@link BackgroundImage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BackgroundImage
     * @static
     * @param {IBackgroundImage} message BackgroundImage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BackgroundImage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BackgroundImage message from the specified reader or buffer.
     * @function decode
     * @memberof BackgroundImage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BackgroundImage} BackgroundImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BackgroundImage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BackgroundImage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.url = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BackgroundImage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BackgroundImage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BackgroundImage} BackgroundImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BackgroundImage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BackgroundImage message.
     * @function verify
     * @memberof BackgroundImage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BackgroundImage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        return null;
    };

    /**
     * Creates a BackgroundImage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BackgroundImage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BackgroundImage} BackgroundImage
     */
    BackgroundImage.fromObject = function fromObject(object) {
        if (object instanceof $root.BackgroundImage)
            return object;
        var message = new $root.BackgroundImage();
        if (object.name != null)
            message.name = String(object.name);
        if (object.url != null)
            message.url = String(object.url);
        return message;
    };

    /**
     * Creates a plain object from a BackgroundImage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BackgroundImage
     * @static
     * @param {BackgroundImage} message BackgroundImage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BackgroundImage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.url = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        return object;
    };

    /**
     * Converts this BackgroundImage to JSON.
     * @function toJSON
     * @memberof BackgroundImage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BackgroundImage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BackgroundImage;
})();

$root.BackgroundMusic = (function() {

    /**
     * Properties of a BackgroundMusic.
     * @exports IBackgroundMusic
     * @interface IBackgroundMusic
     * @property {string|null} [name] BackgroundMusic name
     * @property {string|null} [url] BackgroundMusic url
     */

    /**
     * Constructs a new BackgroundMusic.
     * @exports BackgroundMusic
     * @classdesc Represents a BackgroundMusic.
     * @implements IBackgroundMusic
     * @constructor
     * @param {IBackgroundMusic=} [properties] Properties to set
     */
    function BackgroundMusic(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BackgroundMusic name.
     * @member {string} name
     * @memberof BackgroundMusic
     * @instance
     */
    BackgroundMusic.prototype.name = "";

    /**
     * BackgroundMusic url.
     * @member {string} url
     * @memberof BackgroundMusic
     * @instance
     */
    BackgroundMusic.prototype.url = "";

    /**
     * Creates a new BackgroundMusic instance using the specified properties.
     * @function create
     * @memberof BackgroundMusic
     * @static
     * @param {IBackgroundMusic=} [properties] Properties to set
     * @returns {BackgroundMusic} BackgroundMusic instance
     */
    BackgroundMusic.create = function create(properties) {
        return new BackgroundMusic(properties);
    };

    /**
     * Encodes the specified BackgroundMusic message. Does not implicitly {@link BackgroundMusic.verify|verify} messages.
     * @function encode
     * @memberof BackgroundMusic
     * @static
     * @param {IBackgroundMusic} message BackgroundMusic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BackgroundMusic.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
        return writer;
    };

    /**
     * Encodes the specified BackgroundMusic message, length delimited. Does not implicitly {@link BackgroundMusic.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BackgroundMusic
     * @static
     * @param {IBackgroundMusic} message BackgroundMusic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BackgroundMusic.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BackgroundMusic message from the specified reader or buffer.
     * @function decode
     * @memberof BackgroundMusic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BackgroundMusic} BackgroundMusic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BackgroundMusic.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BackgroundMusic();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.url = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BackgroundMusic message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BackgroundMusic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BackgroundMusic} BackgroundMusic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BackgroundMusic.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BackgroundMusic message.
     * @function verify
     * @memberof BackgroundMusic
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BackgroundMusic.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        return null;
    };

    /**
     * Creates a BackgroundMusic message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BackgroundMusic
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BackgroundMusic} BackgroundMusic
     */
    BackgroundMusic.fromObject = function fromObject(object) {
        if (object instanceof $root.BackgroundMusic)
            return object;
        var message = new $root.BackgroundMusic();
        if (object.name != null)
            message.name = String(object.name);
        if (object.url != null)
            message.url = String(object.url);
        return message;
    };

    /**
     * Creates a plain object from a BackgroundMusic message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BackgroundMusic
     * @static
     * @param {BackgroundMusic} message BackgroundMusic
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BackgroundMusic.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.url = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        return object;
    };

    /**
     * Converts this BackgroundMusic to JSON.
     * @function toJSON
     * @memberof BackgroundMusic
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BackgroundMusic.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BackgroundMusic;
})();

$root.Wav = (function() {

    /**
     * Properties of a Wav.
     * @exports IWav
     * @interface IWav
     * @property {string|null} [content] Wav content
     * @property {string|null} [url] Wav url
     */

    /**
     * Constructs a new Wav.
     * @exports Wav
     * @classdesc Represents a Wav.
     * @implements IWav
     * @constructor
     * @param {IWav=} [properties] Properties to set
     */
    function Wav(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Wav content.
     * @member {string} content
     * @memberof Wav
     * @instance
     */
    Wav.prototype.content = "";

    /**
     * Wav url.
     * @member {string} url
     * @memberof Wav
     * @instance
     */
    Wav.prototype.url = "";

    /**
     * Creates a new Wav instance using the specified properties.
     * @function create
     * @memberof Wav
     * @static
     * @param {IWav=} [properties] Properties to set
     * @returns {Wav} Wav instance
     */
    Wav.create = function create(properties) {
        return new Wav(properties);
    };

    /**
     * Encodes the specified Wav message. Does not implicitly {@link Wav.verify|verify} messages.
     * @function encode
     * @memberof Wav
     * @static
     * @param {IWav} message Wav message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Wav.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
        return writer;
    };

    /**
     * Encodes the specified Wav message, length delimited. Does not implicitly {@link Wav.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Wav
     * @static
     * @param {IWav} message Wav message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Wav.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Wav message from the specified reader or buffer.
     * @function decode
     * @memberof Wav
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Wav} Wav
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Wav.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wav();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.content = reader.string();
                break;
            case 2:
                message.url = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Wav message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Wav
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Wav} Wav
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Wav.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Wav message.
     * @function verify
     * @memberof Wav
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Wav.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        return null;
    };

    /**
     * Creates a Wav message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Wav
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Wav} Wav
     */
    Wav.fromObject = function fromObject(object) {
        if (object instanceof $root.Wav)
            return object;
        var message = new $root.Wav();
        if (object.content != null)
            message.content = String(object.content);
        if (object.url != null)
            message.url = String(object.url);
        return message;
    };

    /**
     * Creates a plain object from a Wav message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Wav
     * @static
     * @param {Wav} message Wav
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Wav.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.content = "";
            object.url = "";
        }
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        return object;
    };

    /**
     * Converts this Wav to JSON.
     * @function toJSON
     * @memberof Wav
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Wav.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Wav;
})();

$root.Process3dReplyOnedim = (function() {

    /**
     * Properties of a Process3dReplyOnedim.
     * @exports IProcess3dReplyOnedim
     * @interface IProcess3dReplyOnedim
     * @property {string|null} [taskId] Process3dReplyOnedim taskId
     * @property {number|null} [code] Process3dReplyOnedim code
     * @property {Uint8Array|null} [indPoints] Process3dReplyOnedim indPoints
     * @property {Uint8Array|null} [points] Process3dReplyOnedim points
     * @property {Array.<number>|null} [shape] Process3dReplyOnedim shape
     * @property {string|null} [audio] Process3dReplyOnedim audio
     * @property {number|null} [startTime] Process3dReplyOnedim startTime
     * @property {Array.<IAnimation>|null} [animations] Process3dReplyOnedim animations
     * @property {Array.<IExpression>|null} [expressions] Process3dReplyOnedim expressions
     * @property {IResolution|null} [resolution] Process3dReplyOnedim resolution
     * @property {IMode|null} [mode] Process3dReplyOnedim mode
     * @property {IBackgroundImage|null} [backgroundImage] Process3dReplyOnedim backgroundImage
     * @property {IBackgroundMusic|null} [backgroundMusic] Process3dReplyOnedim backgroundMusic
     * @property {IWav|null} [Wav] Process3dReplyOnedim Wav
     */

    /**
     * Constructs a new Process3dReplyOnedim.
     * @exports Process3dReplyOnedim
     * @classdesc Represents a Process3dReplyOnedim.
     * @implements IProcess3dReplyOnedim
     * @constructor
     * @param {IProcess3dReplyOnedim=} [properties] Properties to set
     */
    function Process3dReplyOnedim(properties) {
        this.shape = [];
        this.animations = [];
        this.expressions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Process3dReplyOnedim taskId.
     * @member {string} taskId
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.taskId = "";

    /**
     * Process3dReplyOnedim code.
     * @member {number} code
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.code = 0;

    /**
     * Process3dReplyOnedim indPoints.
     * @member {Uint8Array} indPoints
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.indPoints = $util.newBuffer([]);

    /**
     * Process3dReplyOnedim points.
     * @member {Uint8Array} points
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.points = $util.newBuffer([]);

    /**
     * Process3dReplyOnedim shape.
     * @member {Array.<number>} shape
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.shape = $util.emptyArray;

    /**
     * Process3dReplyOnedim audio.
     * @member {string} audio
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.audio = "";

    /**
     * Process3dReplyOnedim startTime.
     * @member {number} startTime
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.startTime = 0;

    /**
     * Process3dReplyOnedim animations.
     * @member {Array.<IAnimation>} animations
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.animations = $util.emptyArray;

    /**
     * Process3dReplyOnedim expressions.
     * @member {Array.<IExpression>} expressions
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.expressions = $util.emptyArray;

    /**
     * Process3dReplyOnedim resolution.
     * @member {IResolution|null|undefined} resolution
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.resolution = null;

    /**
     * Process3dReplyOnedim mode.
     * @member {IMode|null|undefined} mode
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.mode = null;

    /**
     * Process3dReplyOnedim backgroundImage.
     * @member {IBackgroundImage|null|undefined} backgroundImage
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.backgroundImage = null;

    /**
     * Process3dReplyOnedim backgroundMusic.
     * @member {IBackgroundMusic|null|undefined} backgroundMusic
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.backgroundMusic = null;

    /**
     * Process3dReplyOnedim Wav.
     * @member {IWav|null|undefined} Wav
     * @memberof Process3dReplyOnedim
     * @instance
     */
    Process3dReplyOnedim.prototype.Wav = null;

    /**
     * Creates a new Process3dReplyOnedim instance using the specified properties.
     * @function create
     * @memberof Process3dReplyOnedim
     * @static
     * @param {IProcess3dReplyOnedim=} [properties] Properties to set
     * @returns {Process3dReplyOnedim} Process3dReplyOnedim instance
     */
    Process3dReplyOnedim.create = function create(properties) {
        return new Process3dReplyOnedim(properties);
    };

    /**
     * Encodes the specified Process3dReplyOnedim message. Does not implicitly {@link Process3dReplyOnedim.verify|verify} messages.
     * @function encode
     * @memberof Process3dReplyOnedim
     * @static
     * @param {IProcess3dReplyOnedim} message Process3dReplyOnedim message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Process3dReplyOnedim.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.taskId != null && Object.hasOwnProperty.call(message, "taskId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.taskId);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
        if (message.indPoints != null && Object.hasOwnProperty.call(message, "indPoints"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.indPoints);
        if (message.points != null && Object.hasOwnProperty.call(message, "points"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.points);
        if (message.shape != null && message.shape.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.shape.length; ++i)
                writer.int32(message.shape[i]);
            writer.ldelim();
        }
        if (message.audio != null && Object.hasOwnProperty.call(message, "audio"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.audio);
        if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
            writer.uint32(/* id 7, wireType 5 =*/61).float(message.startTime);
        if (message.animations != null && message.animations.length)
            for (var i = 0; i < message.animations.length; ++i)
                $root.Animation.encode(message.animations[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.expressions != null && message.expressions.length)
            for (var i = 0; i < message.expressions.length; ++i)
                $root.Expression.encode(message.expressions[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.resolution != null && Object.hasOwnProperty.call(message, "resolution"))
            $root.Resolution.encode(message.resolution, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            $root.Mode.encode(message.mode, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.backgroundImage != null && Object.hasOwnProperty.call(message, "backgroundImage"))
            $root.BackgroundImage.encode(message.backgroundImage, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.backgroundMusic != null && Object.hasOwnProperty.call(message, "backgroundMusic"))
            $root.BackgroundMusic.encode(message.backgroundMusic, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.Wav != null && Object.hasOwnProperty.call(message, "Wav"))
            $root.Wav.encode(message.Wav, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Process3dReplyOnedim message, length delimited. Does not implicitly {@link Process3dReplyOnedim.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Process3dReplyOnedim
     * @static
     * @param {IProcess3dReplyOnedim} message Process3dReplyOnedim message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Process3dReplyOnedim.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Process3dReplyOnedim message from the specified reader or buffer.
     * @function decode
     * @memberof Process3dReplyOnedim
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Process3dReplyOnedim} Process3dReplyOnedim
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Process3dReplyOnedim.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Process3dReplyOnedim();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.taskId = reader.string();
                break;
            case 2:
                message.code = reader.int32();
                break;
            case 3:
                message.indPoints = reader.bytes();
                break;
            case 4:
                message.points = reader.bytes();
                break;
            case 5:
                if (!(message.shape && message.shape.length))
                    message.shape = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.shape.push(reader.int32());
                } else
                    message.shape.push(reader.int32());
                break;
            case 6:
                message.audio = reader.string();
                break;
            case 7:
                message.startTime = reader.float();
                break;
            case 8:
                if (!(message.animations && message.animations.length))
                    message.animations = [];
                message.animations.push($root.Animation.decode(reader, reader.uint32()));
                break;
            case 9:
                if (!(message.expressions && message.expressions.length))
                    message.expressions = [];
                message.expressions.push($root.Expression.decode(reader, reader.uint32()));
                break;
            case 10:
                message.resolution = $root.Resolution.decode(reader, reader.uint32());
                break;
            case 11:
                message.mode = $root.Mode.decode(reader, reader.uint32());
                break;
            case 12:
                message.backgroundImage = $root.BackgroundImage.decode(reader, reader.uint32());
                break;
            case 13:
                message.backgroundMusic = $root.BackgroundMusic.decode(reader, reader.uint32());
                break;
            case 14:
                message.Wav = $root.Wav.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Process3dReplyOnedim message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Process3dReplyOnedim
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Process3dReplyOnedim} Process3dReplyOnedim
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Process3dReplyOnedim.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Process3dReplyOnedim message.
     * @function verify
     * @memberof Process3dReplyOnedim
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Process3dReplyOnedim.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.taskId != null && message.hasOwnProperty("taskId"))
            if (!$util.isString(message.taskId))
                return "taskId: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        if (message.indPoints != null && message.hasOwnProperty("indPoints"))
            if (!(message.indPoints && typeof message.indPoints.length === "number" || $util.isString(message.indPoints)))
                return "indPoints: buffer expected";
        if (message.points != null && message.hasOwnProperty("points"))
            if (!(message.points && typeof message.points.length === "number" || $util.isString(message.points)))
                return "points: buffer expected";
        if (message.shape != null && message.hasOwnProperty("shape")) {
            if (!Array.isArray(message.shape))
                return "shape: array expected";
            for (var i = 0; i < message.shape.length; ++i)
                if (!$util.isInteger(message.shape[i]))
                    return "shape: integer[] expected";
        }
        if (message.audio != null && message.hasOwnProperty("audio"))
            if (!$util.isString(message.audio))
                return "audio: string expected";
        if (message.startTime != null && message.hasOwnProperty("startTime"))
            if (typeof message.startTime !== "number")
                return "startTime: number expected";
        if (message.animations != null && message.hasOwnProperty("animations")) {
            if (!Array.isArray(message.animations))
                return "animations: array expected";
            for (var i = 0; i < message.animations.length; ++i) {
                var error = $root.Animation.verify(message.animations[i]);
                if (error)
                    return "animations." + error;
            }
        }
        if (message.expressions != null && message.hasOwnProperty("expressions")) {
            if (!Array.isArray(message.expressions))
                return "expressions: array expected";
            for (var i = 0; i < message.expressions.length; ++i) {
                var error = $root.Expression.verify(message.expressions[i]);
                if (error)
                    return "expressions." + error;
            }
        }
        if (message.resolution != null && message.hasOwnProperty("resolution")) {
            var error = $root.Resolution.verify(message.resolution);
            if (error)
                return "resolution." + error;
        }
        if (message.mode != null && message.hasOwnProperty("mode")) {
            var error = $root.Mode.verify(message.mode);
            if (error)
                return "mode." + error;
        }
        if (message.backgroundImage != null && message.hasOwnProperty("backgroundImage")) {
            var error = $root.BackgroundImage.verify(message.backgroundImage);
            if (error)
                return "backgroundImage." + error;
        }
        if (message.backgroundMusic != null && message.hasOwnProperty("backgroundMusic")) {
            var error = $root.BackgroundMusic.verify(message.backgroundMusic);
            if (error)
                return "backgroundMusic." + error;
        }
        if (message.Wav != null && message.hasOwnProperty("Wav")) {
            var error = $root.Wav.verify(message.Wav);
            if (error)
                return "Wav." + error;
        }
        return null;
    };

    /**
     * Creates a Process3dReplyOnedim message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Process3dReplyOnedim
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Process3dReplyOnedim} Process3dReplyOnedim
     */
    Process3dReplyOnedim.fromObject = function fromObject(object) {
        if (object instanceof $root.Process3dReplyOnedim)
            return object;
        var message = new $root.Process3dReplyOnedim();
        if (object.taskId != null)
            message.taskId = String(object.taskId);
        if (object.code != null)
            message.code = object.code | 0;
        if (object.indPoints != null)
            if (typeof object.indPoints === "string")
                $util.base64.decode(object.indPoints, message.indPoints = $util.newBuffer($util.base64.length(object.indPoints)), 0);
            else if (object.indPoints.length)
                message.indPoints = object.indPoints;
        if (object.points != null)
            if (typeof object.points === "string")
                $util.base64.decode(object.points, message.points = $util.newBuffer($util.base64.length(object.points)), 0);
            else if (object.points.length)
                message.points = object.points;
        if (object.shape) {
            if (!Array.isArray(object.shape))
                throw TypeError(".Process3dReplyOnedim.shape: array expected");
            message.shape = [];
            for (var i = 0; i < object.shape.length; ++i)
                message.shape[i] = object.shape[i] | 0;
        }
        if (object.audio != null)
            message.audio = String(object.audio);
        if (object.startTime != null)
            message.startTime = Number(object.startTime);
        if (object.animations) {
            if (!Array.isArray(object.animations))
                throw TypeError(".Process3dReplyOnedim.animations: array expected");
            message.animations = [];
            for (var i = 0; i < object.animations.length; ++i) {
                if (typeof object.animations[i] !== "object")
                    throw TypeError(".Process3dReplyOnedim.animations: object expected");
                message.animations[i] = $root.Animation.fromObject(object.animations[i]);
            }
        }
        if (object.expressions) {
            if (!Array.isArray(object.expressions))
                throw TypeError(".Process3dReplyOnedim.expressions: array expected");
            message.expressions = [];
            for (var i = 0; i < object.expressions.length; ++i) {
                if (typeof object.expressions[i] !== "object")
                    throw TypeError(".Process3dReplyOnedim.expressions: object expected");
                message.expressions[i] = $root.Expression.fromObject(object.expressions[i]);
            }
        }
        if (object.resolution != null) {
            if (typeof object.resolution !== "object")
                throw TypeError(".Process3dReplyOnedim.resolution: object expected");
            message.resolution = $root.Resolution.fromObject(object.resolution);
        }
        if (object.mode != null) {
            if (typeof object.mode !== "object")
                throw TypeError(".Process3dReplyOnedim.mode: object expected");
            message.mode = $root.Mode.fromObject(object.mode);
        }
        if (object.backgroundImage != null) {
            if (typeof object.backgroundImage !== "object")
                throw TypeError(".Process3dReplyOnedim.backgroundImage: object expected");
            message.backgroundImage = $root.BackgroundImage.fromObject(object.backgroundImage);
        }
        if (object.backgroundMusic != null) {
            if (typeof object.backgroundMusic !== "object")
                throw TypeError(".Process3dReplyOnedim.backgroundMusic: object expected");
            message.backgroundMusic = $root.BackgroundMusic.fromObject(object.backgroundMusic);
        }
        if (object.Wav != null) {
            if (typeof object.Wav !== "object")
                throw TypeError(".Process3dReplyOnedim.Wav: object expected");
            message.Wav = $root.Wav.fromObject(object.Wav);
        }
        return message;
    };

    /**
     * Creates a plain object from a Process3dReplyOnedim message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Process3dReplyOnedim
     * @static
     * @param {Process3dReplyOnedim} message Process3dReplyOnedim
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Process3dReplyOnedim.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.shape = [];
            object.animations = [];
            object.expressions = [];
        }
        if (options.defaults) {
            object.taskId = "";
            object.code = 0;
            if (options.bytes === String)
                object.indPoints = "";
            else {
                object.indPoints = [];
                if (options.bytes !== Array)
                    object.indPoints = $util.newBuffer(object.indPoints);
            }
            if (options.bytes === String)
                object.points = "";
            else {
                object.points = [];
                if (options.bytes !== Array)
                    object.points = $util.newBuffer(object.points);
            }
            object.audio = "";
            object.startTime = 0;
            object.resolution = null;
            object.mode = null;
            object.backgroundImage = null;
            object.backgroundMusic = null;
            object.Wav = null;
        }
        if (message.taskId != null && message.hasOwnProperty("taskId"))
            object.taskId = message.taskId;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.indPoints != null && message.hasOwnProperty("indPoints"))
            object.indPoints = options.bytes === String ? $util.base64.encode(message.indPoints, 0, message.indPoints.length) : options.bytes === Array ? Array.prototype.slice.call(message.indPoints) : message.indPoints;
        if (message.points != null && message.hasOwnProperty("points"))
            object.points = options.bytes === String ? $util.base64.encode(message.points, 0, message.points.length) : options.bytes === Array ? Array.prototype.slice.call(message.points) : message.points;
        if (message.shape && message.shape.length) {
            object.shape = [];
            for (var j = 0; j < message.shape.length; ++j)
                object.shape[j] = message.shape[j];
        }
        if (message.audio != null && message.hasOwnProperty("audio"))
            object.audio = message.audio;
        if (message.startTime != null && message.hasOwnProperty("startTime"))
            object.startTime = options.json && !isFinite(message.startTime) ? String(message.startTime) : message.startTime;
        if (message.animations && message.animations.length) {
            object.animations = [];
            for (var j = 0; j < message.animations.length; ++j)
                object.animations[j] = $root.Animation.toObject(message.animations[j], options);
        }
        if (message.expressions && message.expressions.length) {
            object.expressions = [];
            for (var j = 0; j < message.expressions.length; ++j)
                object.expressions[j] = $root.Expression.toObject(message.expressions[j], options);
        }
        if (message.resolution != null && message.hasOwnProperty("resolution"))
            object.resolution = $root.Resolution.toObject(message.resolution, options);
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = $root.Mode.toObject(message.mode, options);
        if (message.backgroundImage != null && message.hasOwnProperty("backgroundImage"))
            object.backgroundImage = $root.BackgroundImage.toObject(message.backgroundImage, options);
        if (message.backgroundMusic != null && message.hasOwnProperty("backgroundMusic"))
            object.backgroundMusic = $root.BackgroundMusic.toObject(message.backgroundMusic, options);
        if (message.Wav != null && message.hasOwnProperty("Wav"))
            object.Wav = $root.Wav.toObject(message.Wav, options);
        return object;
    };

    /**
     * Converts this Process3dReplyOnedim to JSON.
     * @function toJSON
     * @memberof Process3dReplyOnedim
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Process3dReplyOnedim.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Process3dReplyOnedim;
})();

module.exports = $root;
