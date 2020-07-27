import * as $protobuf from "protobufjs";
/** Represents a Process */
export class Process extends $protobuf.rpc.Service {

    /**
     * Constructs a new Process service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Process service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Process;

    /**
     * Calls Process3d.
     * @param request Process3dRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and Process3dReply
     */
    public process3d(request: IProcess3dRequest, callback: Process.Process3dCallback): void;

    /**
     * Calls Process3d.
     * @param request Process3dRequest message or plain object
     * @returns Promise
     */
    public process3d(request: IProcess3dRequest): Promise<Process3dReply>;

    /**
     * Calls Process3dOnedim.
     * @param request Process3dRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and Process3dReplyOnedim
     */
    public process3dOnedim(request: IProcess3dRequest, callback: Process.Process3dOnedimCallback): void;

    /**
     * Calls Process3dOnedim.
     * @param request Process3dRequest message or plain object
     * @returns Promise
     */
    public process3dOnedim(request: IProcess3dRequest): Promise<Process3dReplyOnedim>;
}

export namespace Process {

    /**
     * Callback as used by {@link Process#process3d}.
     * @param error Error, if any
     * @param [response] Process3dReply
     */
    type Process3dCallback = (error: (Error|null), response?: Process3dReply) => void;

    /**
     * Callback as used by {@link Process#process3dOnedim}.
     * @param error Error, if any
     * @param [response] Process3dReplyOnedim
     */
    type Process3dOnedimCallback = (error: (Error|null), response?: Process3dReplyOnedim) => void;
}

/** Properties of a Process3dRequest. */
export interface IProcess3dRequest {

    /** Process3dRequest sampleRate */
    sampleRate?: (number|null);

    /** Process3dRequest wav */
    wav?: (Uint8Array|null);

    /** Process3dRequest ratio */
    ratio?: (number|null);
}

/** Represents a Process3dRequest. */
export class Process3dRequest implements IProcess3dRequest {

    /**
     * Constructs a new Process3dRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProcess3dRequest);

    /** Process3dRequest sampleRate. */
    public sampleRate: number;

    /** Process3dRequest wav. */
    public wav: Uint8Array;

    /** Process3dRequest ratio. */
    public ratio: number;

    /**
     * Creates a new Process3dRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Process3dRequest instance
     */
    public static create(properties?: IProcess3dRequest): Process3dRequest;

    /**
     * Encodes the specified Process3dRequest message. Does not implicitly {@link Process3dRequest.verify|verify} messages.
     * @param message Process3dRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProcess3dRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Process3dRequest message, length delimited. Does not implicitly {@link Process3dRequest.verify|verify} messages.
     * @param message Process3dRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProcess3dRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Process3dRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Process3dRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Process3dRequest;

    /**
     * Decodes a Process3dRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Process3dRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Process3dRequest;

    /**
     * Verifies a Process3dRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Process3dRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Process3dRequest
     */
    public static fromObject(object: { [k: string]: any }): Process3dRequest;

    /**
     * Creates a plain object from a Process3dRequest message. Also converts values to other types if specified.
     * @param message Process3dRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Process3dRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Process3dRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Point3D. */
export interface IPoint3D {

    /** Point3D x */
    x?: (number|null);

    /** Point3D y */
    y?: (number|null);

    /** Point3D z */
    z?: (number|null);
}

/** Represents a Point3D. */
export class Point3D implements IPoint3D {

    /**
     * Constructs a new Point3D.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPoint3D);

    /** Point3D x. */
    public x: number;

    /** Point3D y. */
    public y: number;

    /** Point3D z. */
    public z: number;

    /**
     * Creates a new Point3D instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Point3D instance
     */
    public static create(properties?: IPoint3D): Point3D;

    /**
     * Encodes the specified Point3D message. Does not implicitly {@link Point3D.verify|verify} messages.
     * @param message Point3D message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPoint3D, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Point3D message, length delimited. Does not implicitly {@link Point3D.verify|verify} messages.
     * @param message Point3D message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPoint3D, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Point3D message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Point3D
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Point3D;

    /**
     * Decodes a Point3D message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Point3D
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Point3D;

    /**
     * Verifies a Point3D message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Point3D message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Point3D
     */
    public static fromObject(object: { [k: string]: any }): Point3D;

    /**
     * Creates a plain object from a Point3D message. Also converts values to other types if specified.
     * @param message Point3D
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Point3D, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Point3D to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Point3Ds. */
export interface IPoint3Ds {

    /** Point3Ds points */
    points?: (IPoint3D[]|null);
}

/** Represents a Point3Ds. */
export class Point3Ds implements IPoint3Ds {

    /**
     * Constructs a new Point3Ds.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPoint3Ds);

    /** Point3Ds points. */
    public points: IPoint3D[];

    /**
     * Creates a new Point3Ds instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Point3Ds instance
     */
    public static create(properties?: IPoint3Ds): Point3Ds;

    /**
     * Encodes the specified Point3Ds message. Does not implicitly {@link Point3Ds.verify|verify} messages.
     * @param message Point3Ds message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPoint3Ds, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Point3Ds message, length delimited. Does not implicitly {@link Point3Ds.verify|verify} messages.
     * @param message Point3Ds message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPoint3Ds, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Point3Ds message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Point3Ds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Point3Ds;

    /**
     * Decodes a Point3Ds message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Point3Ds
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Point3Ds;

    /**
     * Verifies a Point3Ds message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Point3Ds message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Point3Ds
     */
    public static fromObject(object: { [k: string]: any }): Point3Ds;

    /**
     * Creates a plain object from a Point3Ds message. Also converts values to other types if specified.
     * @param message Point3Ds
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Point3Ds, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Point3Ds to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Point3Dss. */
export interface IPoint3Dss {

    /** Point3Dss points */
    points?: (IPoint3Ds[]|null);
}

/** Represents a Point3Dss. */
export class Point3Dss implements IPoint3Dss {

    /**
     * Constructs a new Point3Dss.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPoint3Dss);

    /** Point3Dss points. */
    public points: IPoint3Ds[];

    /**
     * Creates a new Point3Dss instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Point3Dss instance
     */
    public static create(properties?: IPoint3Dss): Point3Dss;

    /**
     * Encodes the specified Point3Dss message. Does not implicitly {@link Point3Dss.verify|verify} messages.
     * @param message Point3Dss message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPoint3Dss, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Point3Dss message, length delimited. Does not implicitly {@link Point3Dss.verify|verify} messages.
     * @param message Point3Dss message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPoint3Dss, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Point3Dss message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Point3Dss
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Point3Dss;

    /**
     * Decodes a Point3Dss message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Point3Dss
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Point3Dss;

    /**
     * Verifies a Point3Dss message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Point3Dss message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Point3Dss
     */
    public static fromObject(object: { [k: string]: any }): Point3Dss;

    /**
     * Creates a plain object from a Point3Dss message. Also converts values to other types if specified.
     * @param message Point3Dss
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Point3Dss, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Point3Dss to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Process3dReply. */
export interface IProcess3dReply {

    /** Process3dReply code */
    code?: (number|null);

    /** Process3dReply indPoints */
    indPoints?: (number[]|null);

    /** Process3dReply points */
    points?: (IPoint3Dss[]|null);
}

/** Represents a Process3dReply. */
export class Process3dReply implements IProcess3dReply {

    /**
     * Constructs a new Process3dReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProcess3dReply);

    /** Process3dReply code. */
    public code: number;

    /** Process3dReply indPoints. */
    public indPoints: number[];

    /** Process3dReply points. */
    public points: IPoint3Dss[];

    /**
     * Creates a new Process3dReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Process3dReply instance
     */
    public static create(properties?: IProcess3dReply): Process3dReply;

    /**
     * Encodes the specified Process3dReply message. Does not implicitly {@link Process3dReply.verify|verify} messages.
     * @param message Process3dReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProcess3dReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Process3dReply message, length delimited. Does not implicitly {@link Process3dReply.verify|verify} messages.
     * @param message Process3dReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProcess3dReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Process3dReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Process3dReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Process3dReply;

    /**
     * Decodes a Process3dReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Process3dReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Process3dReply;

    /**
     * Verifies a Process3dReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Process3dReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Process3dReply
     */
    public static fromObject(object: { [k: string]: any }): Process3dReply;

    /**
     * Creates a plain object from a Process3dReply message. Also converts values to other types if specified.
     * @param message Process3dReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Process3dReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Process3dReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Animation. */
export interface IAnimation {

    /** Animation time */
    time?: (number|null);

    /** Animation name */
    name?: (string|null);
}

/** Represents an Animation. */
export class Animation implements IAnimation {

    /**
     * Constructs a new Animation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAnimation);

    /** Animation time. */
    public time: number;

    /** Animation name. */
    public name: string;

    /**
     * Creates a new Animation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Animation instance
     */
    public static create(properties?: IAnimation): Animation;

    /**
     * Encodes the specified Animation message. Does not implicitly {@link Animation.verify|verify} messages.
     * @param message Animation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAnimation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Animation message, length delimited. Does not implicitly {@link Animation.verify|verify} messages.
     * @param message Animation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAnimation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Animation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Animation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Animation;

    /**
     * Decodes an Animation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Animation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Animation;

    /**
     * Verifies an Animation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Animation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Animation
     */
    public static fromObject(object: { [k: string]: any }): Animation;

    /**
     * Creates a plain object from an Animation message. Also converts values to other types if specified.
     * @param message Animation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Animation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Animation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Expression. */
export interface IExpression {

    /** Expression time */
    time?: (number|null);

    /** Expression name */
    name?: (string|null);
}

/** Represents an Expression. */
export class Expression implements IExpression {

    /**
     * Constructs a new Expression.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExpression);

    /** Expression time. */
    public time: number;

    /** Expression name. */
    public name: string;

    /**
     * Creates a new Expression instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Expression instance
     */
    public static create(properties?: IExpression): Expression;

    /**
     * Encodes the specified Expression message. Does not implicitly {@link Expression.verify|verify} messages.
     * @param message Expression message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExpression, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Expression message, length delimited. Does not implicitly {@link Expression.verify|verify} messages.
     * @param message Expression message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExpression, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Expression message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Expression
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Expression;

    /**
     * Decodes an Expression message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Expression
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Expression;

    /**
     * Verifies an Expression message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Expression message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Expression
     */
    public static fromObject(object: { [k: string]: any }): Expression;

    /**
     * Creates a plain object from an Expression message. Also converts values to other types if specified.
     * @param message Expression
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Expression, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Expression to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Resolution. */
export interface IResolution {

    /** Resolution width */
    width?: (number|null);

    /** Resolution height */
    height?: (number|null);
}

/** Represents a Resolution. */
export class Resolution implements IResolution {

    /**
     * Constructs a new Resolution.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResolution);

    /** Resolution width. */
    public width: number;

    /** Resolution height. */
    public height: number;

    /**
     * Creates a new Resolution instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Resolution instance
     */
    public static create(properties?: IResolution): Resolution;

    /**
     * Encodes the specified Resolution message. Does not implicitly {@link Resolution.verify|verify} messages.
     * @param message Resolution message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResolution, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Resolution message, length delimited. Does not implicitly {@link Resolution.verify|verify} messages.
     * @param message Resolution message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResolution, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Resolution message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Resolution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Resolution;

    /**
     * Decodes a Resolution message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Resolution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Resolution;

    /**
     * Verifies a Resolution message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Resolution message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Resolution
     */
    public static fromObject(object: { [k: string]: any }): Resolution;

    /**
     * Creates a plain object from a Resolution message. Also converts values to other types if specified.
     * @param message Resolution
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Resolution, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Resolution to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Mode. */
export interface IMode {

    /** Mode name */
    name?: (string|null);

    /** Mode url */
    url?: (string|null);
}

/** Represents a Mode. */
export class Mode implements IMode {

    /**
     * Constructs a new Mode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMode);

    /** Mode name. */
    public name: string;

    /** Mode url. */
    public url: string;

    /**
     * Creates a new Mode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Mode instance
     */
    public static create(properties?: IMode): Mode;

    /**
     * Encodes the specified Mode message. Does not implicitly {@link Mode.verify|verify} messages.
     * @param message Mode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Mode message, length delimited. Does not implicitly {@link Mode.verify|verify} messages.
     * @param message Mode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Mode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Mode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mode;

    /**
     * Decodes a Mode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Mode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mode;

    /**
     * Verifies a Mode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Mode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Mode
     */
    public static fromObject(object: { [k: string]: any }): Mode;

    /**
     * Creates a plain object from a Mode message. Also converts values to other types if specified.
     * @param message Mode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Mode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Mode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BackgroundImage. */
export interface IBackgroundImage {

    /** BackgroundImage name */
    name?: (string|null);

    /** BackgroundImage url */
    url?: (string|null);
}

/** Represents a BackgroundImage. */
export class BackgroundImage implements IBackgroundImage {

    /**
     * Constructs a new BackgroundImage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBackgroundImage);

    /** BackgroundImage name. */
    public name: string;

    /** BackgroundImage url. */
    public url: string;

    /**
     * Creates a new BackgroundImage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BackgroundImage instance
     */
    public static create(properties?: IBackgroundImage): BackgroundImage;

    /**
     * Encodes the specified BackgroundImage message. Does not implicitly {@link BackgroundImage.verify|verify} messages.
     * @param message BackgroundImage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBackgroundImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BackgroundImage message, length delimited. Does not implicitly {@link BackgroundImage.verify|verify} messages.
     * @param message BackgroundImage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBackgroundImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BackgroundImage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BackgroundImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BackgroundImage;

    /**
     * Decodes a BackgroundImage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BackgroundImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BackgroundImage;

    /**
     * Verifies a BackgroundImage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BackgroundImage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BackgroundImage
     */
    public static fromObject(object: { [k: string]: any }): BackgroundImage;

    /**
     * Creates a plain object from a BackgroundImage message. Also converts values to other types if specified.
     * @param message BackgroundImage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BackgroundImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BackgroundImage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BackgroundMusic. */
export interface IBackgroundMusic {

    /** BackgroundMusic name */
    name?: (string|null);

    /** BackgroundMusic url */
    url?: (string|null);
}

/** Represents a BackgroundMusic. */
export class BackgroundMusic implements IBackgroundMusic {

    /**
     * Constructs a new BackgroundMusic.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBackgroundMusic);

    /** BackgroundMusic name. */
    public name: string;

    /** BackgroundMusic url. */
    public url: string;

    /**
     * Creates a new BackgroundMusic instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BackgroundMusic instance
     */
    public static create(properties?: IBackgroundMusic): BackgroundMusic;

    /**
     * Encodes the specified BackgroundMusic message. Does not implicitly {@link BackgroundMusic.verify|verify} messages.
     * @param message BackgroundMusic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBackgroundMusic, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BackgroundMusic message, length delimited. Does not implicitly {@link BackgroundMusic.verify|verify} messages.
     * @param message BackgroundMusic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBackgroundMusic, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BackgroundMusic message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BackgroundMusic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BackgroundMusic;

    /**
     * Decodes a BackgroundMusic message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BackgroundMusic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BackgroundMusic;

    /**
     * Verifies a BackgroundMusic message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BackgroundMusic message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BackgroundMusic
     */
    public static fromObject(object: { [k: string]: any }): BackgroundMusic;

    /**
     * Creates a plain object from a BackgroundMusic message. Also converts values to other types if specified.
     * @param message BackgroundMusic
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BackgroundMusic, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BackgroundMusic to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Wav. */
export interface IWav {

    /** Wav content */
    content?: (string|null);

    /** Wav url */
    url?: (string|null);
}

/** Represents a Wav. */
export class Wav implements IWav {

    /**
     * Constructs a new Wav.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWav);

    /** Wav content. */
    public content: string;

    /** Wav url. */
    public url: string;

    /**
     * Creates a new Wav instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Wav instance
     */
    public static create(properties?: IWav): Wav;

    /**
     * Encodes the specified Wav message. Does not implicitly {@link Wav.verify|verify} messages.
     * @param message Wav message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWav, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Wav message, length delimited. Does not implicitly {@link Wav.verify|verify} messages.
     * @param message Wav message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWav, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Wav message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Wav
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wav;

    /**
     * Decodes a Wav message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Wav
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wav;

    /**
     * Verifies a Wav message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Wav message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Wav
     */
    public static fromObject(object: { [k: string]: any }): Wav;

    /**
     * Creates a plain object from a Wav message. Also converts values to other types if specified.
     * @param message Wav
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Wav, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Wav to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Process3dReplyOnedim. */
export interface IProcess3dReplyOnedim {

    /** Process3dReplyOnedim taskId */
    taskId?: (string|null);

    /** Process3dReplyOnedim code */
    code?: (number|null);

    /** Process3dReplyOnedim indPoints */
    indPoints?: (Uint8Array|null);

    /** Process3dReplyOnedim points */
    points?: (Uint8Array|null);

    /** Process3dReplyOnedim shape */
    shape?: (number[]|null);

    /** Process3dReplyOnedim audio */
    audio?: (string|null);

    /** Process3dReplyOnedim startTime */
    startTime?: (number|null);

    /** Process3dReplyOnedim animations */
    animations?: (IAnimation[]|null);

    /** Process3dReplyOnedim expressions */
    expressions?: (IExpression[]|null);

    /** Process3dReplyOnedim resolution */
    resolution?: (IResolution|null);

    /** Process3dReplyOnedim mode */
    mode?: (IMode|null);

    /** Process3dReplyOnedim backgroundImage */
    backgroundImage?: (IBackgroundImage|null);

    /** Process3dReplyOnedim backgroundMusic */
    backgroundMusic?: (IBackgroundMusic|null);

    /** Process3dReplyOnedim Wav */
    Wav?: (IWav|null);
}

/** Represents a Process3dReplyOnedim. */
export class Process3dReplyOnedim implements IProcess3dReplyOnedim {

    /**
     * Constructs a new Process3dReplyOnedim.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProcess3dReplyOnedim);

    /** Process3dReplyOnedim taskId. */
    public taskId: string;

    /** Process3dReplyOnedim code. */
    public code: number;

    /** Process3dReplyOnedim indPoints. */
    public indPoints: Uint8Array;

    /** Process3dReplyOnedim points. */
    public points: Uint8Array;

    /** Process3dReplyOnedim shape. */
    public shape: number[];

    /** Process3dReplyOnedim audio. */
    public audio: string;

    /** Process3dReplyOnedim startTime. */
    public startTime: number;

    /** Process3dReplyOnedim animations. */
    public animations: IAnimation[];

    /** Process3dReplyOnedim expressions. */
    public expressions: IExpression[];

    /** Process3dReplyOnedim resolution. */
    public resolution?: (IResolution|null);

    /** Process3dReplyOnedim mode. */
    public mode?: (IMode|null);

    /** Process3dReplyOnedim backgroundImage. */
    public backgroundImage?: (IBackgroundImage|null);

    /** Process3dReplyOnedim backgroundMusic. */
    public backgroundMusic?: (IBackgroundMusic|null);

    /** Process3dReplyOnedim Wav. */
    public Wav?: (IWav|null);

    /**
     * Creates a new Process3dReplyOnedim instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Process3dReplyOnedim instance
     */
    public static create(properties?: IProcess3dReplyOnedim): Process3dReplyOnedim;

    /**
     * Encodes the specified Process3dReplyOnedim message. Does not implicitly {@link Process3dReplyOnedim.verify|verify} messages.
     * @param message Process3dReplyOnedim message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProcess3dReplyOnedim, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Process3dReplyOnedim message, length delimited. Does not implicitly {@link Process3dReplyOnedim.verify|verify} messages.
     * @param message Process3dReplyOnedim message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProcess3dReplyOnedim, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Process3dReplyOnedim message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Process3dReplyOnedim
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Process3dReplyOnedim;

    /**
     * Decodes a Process3dReplyOnedim message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Process3dReplyOnedim
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Process3dReplyOnedim;

    /**
     * Verifies a Process3dReplyOnedim message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Process3dReplyOnedim message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Process3dReplyOnedim
     */
    public static fromObject(object: { [k: string]: any }): Process3dReplyOnedim;

    /**
     * Creates a plain object from a Process3dReplyOnedim message. Also converts values to other types if specified.
     * @param message Process3dReplyOnedim
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Process3dReplyOnedim, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Process3dReplyOnedim to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
